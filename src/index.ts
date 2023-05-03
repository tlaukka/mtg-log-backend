import express from 'express'
import db from './database'

const app = express()

app.use(express.json())

app.listen(3000, () => {
  console.log('Server running on port 3000!')

  db.connect()
})
