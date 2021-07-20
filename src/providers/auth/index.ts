import { JwtAuthProvider } from './jwt/jwt-auth.provider'
import env from '../../shared/helpers/env.helper'
import { IUserModel } from '../../modules/auth/protocols'

const authProvider = new JwtAuthProvider<IUserModel>(env.AuthSecret, env.AuthExpiredIn)

export * from './auth.provider'
export { authProvider }
