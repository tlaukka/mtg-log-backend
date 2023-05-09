import cardService from '../services/card-service.mjs'

async function getCards (_, res) {
  try {
    const cards = await cardService.getCards()
    res.status(200).json(cards)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getCard (req, res) {
  try {
    const card = await cardService.getCard(req.params.id)
    res.status(200).json(card)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function insertCards (req, res) {
  try {
    const cards = await cardService.insertCards(req.body)
    res.status(200).json(cards)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function updateCard (req, res) {
  try {
    const card = await cardService.updateCard(req.params.id, req.body)
    res.status(200).json(card)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function deleteCard (req, res) {
  try {
    const card = await cardService.deleteCard(req.params.id)
    res.status(200).json(card)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const cardController = {
  getCards,
  getCard,
  insertCards,
  updateCard,
  deleteCard
}

export default cardController
