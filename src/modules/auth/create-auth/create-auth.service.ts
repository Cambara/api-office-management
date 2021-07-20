import { ICriptographyProvider } from '../../../providers/criptography/criptography.provider'
import { InvalidUserError } from '../../../shared/helpers/errors.helper'
import { IService } from '../../../shared/services/service.protocol'
import { AuthRepository } from '../auth.repository'
import { IAuthModel } from '../models/auth.model'
import { ILoginModel, IUserLoginModel } from '../models/login.model'
import { IAuthProvider } from '../protocols'

export class CreateAuthService implements IService<IAuthModel, ILoginModel> {
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

    execute = async (dto: IAuthModel): Promise<ILoginModel> => {
      const cryptPassword = await this.criptographyProvider.encrypt(dto.password)

      const userForm = Object.assign({}, dto, { password: cryptPassword })
      const existUserEmail = await this.authRepository.findOne({ email: dto.email })

      if (existUserEmail) {
        throw new InvalidUserError()
      }

      const userDocument = await this.authRepository.create(userForm)

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
