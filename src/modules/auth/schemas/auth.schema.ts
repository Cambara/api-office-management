import { Document, model } from 'mongoose'
import { createDefaultSchema } from '../../../shared/helpers/schema.helper'
import { IAuthModel } from '../models/auth.model'

export interface IAuthDocument extends IAuthModel, Document {}

const AuthSchema = createDefaultSchema({
  email: { type: String, unique: true },
  name: String,
  password: String
})

const Auth = model<IAuthDocument>('auth', AuthSchema, 'user')

export { AuthSchema, Auth }
