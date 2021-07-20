import { authProvider } from '../../../providers/auth'
import { criptographyProvider } from '../../../providers/criptography'
import { AuthRepository } from '../auth.repository'
import { validatorService } from '../../../shared/services'
import { CreateAuthService } from './create-auth.service'
import { CreateAuthController } from './create-auth.controller'

const authRepository = AuthRepository.getInstance()
const createAuthService = new CreateAuthService(authProvider, authRepository, criptographyProvider)

const createAuthController = new CreateAuthController(createAuthService, validatorService)

export { createAuthController }
