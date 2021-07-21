import { Router } from 'express'
import { loginController, createAuthController, addCourseController } from '../modules'
import { authMiddleware } from '../shared/midlewares/auth.middleware'

const router = Router()

router.get('/', (request, response) => response.status(200).send())
router.get('/health', (request, response) => response.status(200).send())

router.post('/auth', loginController.handle)
router.post('/signup', createAuthController.handle)

router.use(authMiddleware)

// Courses
router.post('/courses', addCourseController.handle)

export { router }
