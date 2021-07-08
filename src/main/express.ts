import express from 'express'
import { router } from './routes'

const expressApp = express()

expressApp.use(express.json())
expressApp.use(router)
expressApp.set('port', process.env.PORT || 3000)

export { expressApp }
