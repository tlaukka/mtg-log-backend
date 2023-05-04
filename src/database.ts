import mongoose from 'mongoose'

async function init () {
  try {
    await mongoose.connect('mongodb://localhost:27017')
    console.log('---- DB CONNECT ----')
  } catch (error) {
    console.error(error)
  }
}

const db = {
  init
}

export default db
