import express from 'express'
import db from './database.mjs'
import router from './routes.mjs'

const app = express()

app.use(express.json())
app.use('/api', router)

app.listen(3000, async () => {
  await db.init()
  console.log('Server running on port 3000!')
})

export default app
