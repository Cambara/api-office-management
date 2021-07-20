import { authProvider } from '../../../providers/auth'
import { criptographyProvider } from '../../../providers/criptography'
import { AuthRepository } from '../auth.repository'
import { LoginController } from './login.controller'
import { LoginService } from './login.service'
import { validatorService } from '../../../shared/services'

const authRepository = AuthRepository.getInstance()
const loginService = new LoginService(authProvider, authRepository, criptographyProvider)

const loginController = new LoginController(loginService, validatorService)

export { loginController }
