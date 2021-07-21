import { Router } from 'express'
import { loginController, createAuthController, addCourseController } from '../modules'

const router = Router()

router.get('/', (request, response) => response.status(200).send())
router.get('/health', (request, response) => response.status(200).send())

router.post('/auth', loginController.handle)
router.post('/signup', createAuthController.handle)

// Courses
router.post('/courses', addCourseController.handle)

export { router }
