import { Router } from 'express'
import { loginController, createAuthController, addCourseController, listCourseController, removeCourseController } from '../modules'
import { authMiddleware } from '../shared/midlewares/auth.middleware'

const router = Router()

router.get('/', (request, response) => response.status(200).send())
router.get('/health', (request, response) => response.status(200).send())

router.post('/auth', loginController.handle)
router.post('/signup', createAuthController.handle)

router.use(authMiddleware)

// Courses
router.post('/courses', addCourseController.handle)
router.get('/courses', listCourseController.handle)
router.delete('/courses/:id', removeCourseController.handle)

export { router }
