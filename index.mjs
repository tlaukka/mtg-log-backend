import 'dotenv/config.js'
import './database.mjs'
import express from 'express'
import cardRouter from './routes/card-routes.mjs'

const app = express()

app.use(express.json())
app.use('/cards', cardRouter)

app.listen(3000, async () => {
  console.log('Server running on port 3000!')
})

export default app
