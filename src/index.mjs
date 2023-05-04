import express from 'express'
import db from './database.mjs'
import mongoose, { Schema } from 'mongoose'

const app = express()

app.use(express.json())

app.listen(3000, async () => {
  await db.init()
  console.log('Server running on port 3000!')
})

app.get('/test', (req, res) => {
  console.log('GET /test')
  res.send('TEST GETs')
})

const CardSchema = new Schema({
  id: String,
  name: String
})

const Card = mongoose.model('Card', CardSchema)
