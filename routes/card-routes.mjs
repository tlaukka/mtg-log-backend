import { Router } from 'express'
import cardController from '../controllers/card-controller.mjs'

const cardRouter = Router()

cardRouter.get('/', cardController.getCards)
cardRouter.get('/:id', cardController.getCard)
cardRouter.post('/', cardController.insertCards)
cardRouter.patch('/:id', cardController.updateCard)
cardRouter.delete('/:id', cardController.deleteCard)

export default cardRouter
