import { JwtAuthProvider } from './jwt/jwt-auth.provider'
import env from '../../shared/helpers/env.helper'
import { IUserLoginModel } from '../../modules/auth/models/login.model'

const authProvider = new JwtAuthProvider<IUserLoginModel>(env.AuthSecret, env.AuthExpiredIn)

export * from './auth.provider'
export { authProvider }
