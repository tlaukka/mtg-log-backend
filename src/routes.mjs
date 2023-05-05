import { Router } from 'express'

const router = Router()

router.get('/cards', async (req, res) => {
  // Get all cards
})

router.get('/cards/:id', async (req, res) => {
  // Get card by id
})

router.post('/cards', async (req, res) => {
  // Save a card
})

router.patch('/cards/:id', async (req, res) => {
  // Update a card
})

router.delete('/cards/:id', async (req, res) => {
  // Delete a card
})
