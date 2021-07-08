import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => response.status(200).send())
router.get('/health', (request, response) => response.status(200).send())

export { router }
