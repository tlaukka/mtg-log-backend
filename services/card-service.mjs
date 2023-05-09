import Card from '../models/card.mjs'

async function getCards () {
  return Card.find({}).exec()
}

async function getCard (id) {
  return Card.findById(id).exec()
}

async function insertCards (cards) {
  return Card.insertMany(cards)
}

async function updateCard (id, card) {
  return Card.findByIdAndUpdate(id, card, { new: true }).exec()
}

async function deleteCard (id) {
  return Card.findByIdAndDelete(id).exec()
}


const cardService = {
  getCards,
  getCard,
  insertCards,
  updateCard,
  deleteCard
}

export default cardService
