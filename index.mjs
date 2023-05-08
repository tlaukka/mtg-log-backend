import express from 'express'
import db from './database.mjs'
import cardRouter from './routes/card-routes.mjs'

const app = express()

app.use(express.json())
app.use('/cards', cardRouter)

app.listen(3000, async () => {
  await db.init()
  console.log('Server running on port 3000!')
})

export default app
