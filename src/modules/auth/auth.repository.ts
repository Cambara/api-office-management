import { AbstractRepository } from '../../shared/repositories/abstract.reposity'
import { IAuthModel } from './models/auth.model'
import { IAuthDocument, Auth } from './schemas/auth.schema'

export class AuthRepository extends AbstractRepository<IAuthDocument, IAuthModel> {
  private static instance: AuthRepository
  private constructor () {
    super(Auth)
  }

  static getInstance = ():AuthRepository => {
    if (!AuthRepository.instance) AuthRepository.instance = new AuthRepository()
    return AuthRepository.instance
  }
}
