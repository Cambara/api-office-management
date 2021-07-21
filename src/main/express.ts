import express from 'express'
import { router } from './routes'
import env from '../shared/helpers/env.helper'
import { IUserLoginModel } from '../modules/auth/models/login.model'

const expressApp = express()

expressApp.use(express.json())
expressApp.use(router)
expressApp.set('port', env.port)

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface Request {
            user: IUserLoginModel
        }
    }
}

export { expressApp }
