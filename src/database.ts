import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')

async function connect () {
  await client.connect()
  console.log('---- CONNECT ----')

  return '- DONE -'
}

const db = {
  connect
}

export default db
