import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import supertest from 'supertest'
import app from '../index.mjs'
import { expect } from 'chai'
import Card from '../models/Card.mjs'

let mongoServer

async function createCard () {
  const card = await Card.create({
    _id: 'testcard01',
    name: 'Test Card 01',
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
  })

  return card
}

before(async () => {
  await mongoose.disconnect()

  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

after(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

describe('Route tests', () => {
  it('should create a card', async () => {
    const card = await createCard()

    await supertest(app)
      .get('/api/cards')
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.lengthOf(1)
        expect(response.body[0]._id).to.equal(card._id)
        expect(response.body[0].name).to.equal(card.name)
      })
  })
})
