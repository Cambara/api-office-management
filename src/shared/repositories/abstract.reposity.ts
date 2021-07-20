import { IAbstractRepository, Model, Document, FilterQuery, UpdateQuery, QueryOptions } from './abstract-repository.protocol'

export abstract class AbstractRepository< T extends Document, J> implements IAbstractRepository< T, J> {
  protected readonly model:Model<T>

  constructor (model:Model<T>) {
    this.model = model
  }

  async find (cond: FilterQuery<T>, project?: unknown, options?: QueryOptions): Promise<T[]> {
    return this.model.find(cond, project, options)
  }

  async findOne (cond: FilterQuery<T>, project?: unknown): Promise<T | null> {
    return this.model.findOne(cond, project)
  }

  async create (obj: J): Promise<T> {
    return this.model.create(obj)
  }

  async deleteById (id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id)
  }

  async updateOne (cond: FilterQuery<T>, update: UpdateQuery<T>): Promise<boolean> {
    const response = await this.model.updateOne(cond, update)
    return response.nModified > 0
  }

  async updateMany (cond: FilterQuery<T>, update: UpdateQuery<T>): Promise<boolean> {
    const response = await this.model.updateMany(cond, update)
    return response.nModified > 0
  }

  async count (cond: FilterQuery<T>): Promise<number> {
    return this.model.count(cond)
  }
}
