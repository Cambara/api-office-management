import { Router } from 'express'
import { loginController, createAuthController, addCourseController, listCourseController, removeCourseController, getCourseController, addCourseLogController } from '../modules'
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
router.get('/courses/:id', getCourseController.handle)
router.delete('/courses/:id', removeCourseController.handle)

// Course Logs
router.post('/courses/:id/logs', addCourseLogController.handle)

export { router }
