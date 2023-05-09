import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import supertest from 'supertest'
import app from '../index.mjs'
import { expect } from 'chai'
import Card from '../models/card.mjs'

let mongoServer

function getCardData (id) {
  return {
    _id: id,
    name: `Test Card ${id}`,
    image_uris: {
      small: 'small.jpeg',
      normal: 'normal.jpeg'
    },
    mana_cost: '{W}',
    type_line: 'Creature',
    colors: 'W',
    rarity: 'rare',
    reserved: true,
    collector_number: 1,
    set: 'lea',
    meta: {
      grade: 'nm',
      price: 3.5
    }
  }
}

async function createCard (id) {
  const card = await Card.create(getCardData(id))
  return card
}

before(async function () {
  await mongoose.disconnect()

  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

after(async function () {
  await mongoose.disconnect()
  await mongoServer.stop()
})

beforeEach(async function () {
  await Card.deleteMany({}).exec()
})

describe('Route tests', function () {
  it('should return all cards', async function () {
    await createCard('01')
    await createCard('02')

    await supertest(app)
      .get('/cards')
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.lengthOf(2)
      })
  })

  it('should return a card', async function () {
    const card = await createCard('01')

    await supertest(app)
      .get('/cards/01')
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.an('object')
        expect(response.body).to.eql(card.toObject())
      })
  })

  it('should insert cards', async function () {
    const data = [
      getCardData('01'),
      getCardData('02')
    ]

    await supertest(app)
      .post('/cards')
      .send(data)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.lengthOf(2)
      })
  })

  it('should update a card', async function () {
    await createCard('01')

    const data = {
      meta: {
        grade: 'ex',
        price: 10
      }
    }

    await supertest(app)
      .patch('/cards/01')
      .send(data)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.an('object')
        expect(response.body.meta).to.eql(data.meta)
      })
  })

  it('should delete a card', async function () {
    const card = await createCard('01')

    await supertest(app)
      .delete('/cards/01')
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.an('object')
        expect(response.body).to.eql(card.toObject())
      })
  })
})
