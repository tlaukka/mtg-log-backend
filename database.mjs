import mongoose from 'mongoose'

async function init (uri = 'mongodb://localhost:27017/test') {
  try {
    await mongoose.connect(uri)
    console.log('---- DB CONNECT ----')
  } catch (error) {
    console.error(error)
  }
}

const db = {
  init
}

export default db
