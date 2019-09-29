import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

const controller = (req, res) => {
  res.send({ message: 'hey hi hello' })
}

// /api/item
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/item/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
