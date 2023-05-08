import { Router } from 'express'
import Card from './models/Card.mjs'

const router = Router()

router.get('/cards', async (_, res) => {
  try {
    const cards = await Card.find({}).exec()
    res.status(200).json(cards)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/cards/:id', async (req, res) => {
  try {
    const card = await Card.findById(req.params.id).exec()
    res.status(200).json(card)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/cards', async (req, res) => {
  try {
    const cards = await Card.insertMany(req.body).exec()
    res.status(200).json(cards)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.patch('/cards/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
    res.status(200).json(card)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete('/cards/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id).exec()
    res.status(200).json(card)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
