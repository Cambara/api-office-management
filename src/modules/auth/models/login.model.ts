import { IUserModel } from '../protocols'

export interface IUserLoginModel extends IUserModel {
    _id: string
}

export interface ILoginModel {
    user: IUserLoginModel
    token: string
}
