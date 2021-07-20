import express from 'express'
import { router } from './routes'
import env from '../shared/helpers/env.helper'

const expressApp = express()

expressApp.use(express.json())
expressApp.use(router)
expressApp.set('port', env.port)

export { expressApp }
