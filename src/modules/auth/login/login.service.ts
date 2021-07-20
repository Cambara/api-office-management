import { IAuthProvider } from '../protocols'
import { IService } from '../../../shared/services/service.protocol'
import { ILoginModel, IUserLoginModel } from '../models/login.model'
import { ILoginDto } from './login.dto'
import { AuthRepository } from '../auth.repository'
import { ICriptographyProvider } from '../../../providers/criptography/criptography.provider'
import { InvalidUserError } from '../../../shared/helpers/errors.helper'

export class LoginService implements IService<ILoginDto, ILoginModel> {
    private readonly authProvider:IAuthProvider<IUserLoginModel>
    private readonly authRepository: AuthRepository
    private readonly criptographyProvider: ICriptographyProvider

    constructor (
      authProvider:IAuthProvider<IUserLoginModel>,
      authRepository: AuthRepository,
      criptographyProvider: ICriptographyProvider
    ) {
      this.authProvider = authProvider
      this.authRepository = authRepository
      this.criptographyProvider = criptographyProvider
    }

    execute = async ({ email, password }: ILoginDto): Promise<ILoginModel> => {
      const userDocument = await this.authRepository.findOne({
        email
      })

      if (!userDocument) {
        throw new InvalidUserError()
      }

      const isValid = await this.criptographyProvider.compare(password, userDocument.password)

      if (!isValid) {
        throw new InvalidUserError()
      }

      const user = {
        _id: userDocument.id,
        name: userDocument.name,
        email: userDocument.email
      }

      const token = this.authProvider.sign(user)

      return Promise.resolve({
        user,
        token
      })
    }
}
