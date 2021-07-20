import { IUserModel } from '../protocols'

export interface IAuthModel extends IUserModel {
    password: string
}
