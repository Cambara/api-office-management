import { Schema } from 'mongoose'

export const createDefaultSchema = (obj: unknown): Schema => new Schema(Object.assign({}, obj), { timestamps: true, versionKey: false })

export const createEmbeddedSchema = (obj: unknown): Schema => new Schema(Object.assign({}, obj), { _id: false, versionKey: false })
