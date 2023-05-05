import express from 'express'
import db from './database.mjs'

const app = express()

app.use(express.json())

app.listen(3000, async () => {
  await db.init()
  console.log('Server running on port 3000!')
})
