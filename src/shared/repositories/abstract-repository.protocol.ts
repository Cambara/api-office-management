import { Document, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose'
export * from 'mongoose'

/*
  T Document
  J Model to add a new object
*/
export interface IAbstractRepository< T extends Document, J> {
  find (cond: FilterQuery<T>, project?: unknown, options?: QueryOptions): Promise<T[]>
  findOne (cond: FilterQuery<T>, project?: unknown): Promise<T | null>
  create (obj: J): Promise<T>
  deleteById (id: string): Promise<T | null>
  updateOne (cond: FilterQuery<T>, update: UpdateQuery<T>): Promise<boolean>
  updateMany (cond: FilterQuery<T>, update: UpdateQuery<T>): Promise<boolean>
  count (cond: FilterQuery<T>): Promise<number>
}
