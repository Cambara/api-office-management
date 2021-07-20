import * as mongoose from 'mongoose'
import { mongoDBConnect } from './connection.adapter'

export class ConnectionFactory {
  private connection: typeof mongoose | undefined = undefined
  private url:string
  private static instance: ConnectionFactory

  private constructor (url:string) {
    this.url = url
  }

  static getInstance = (url:string): ConnectionFactory => {
    if (!ConnectionFactory.instance) ConnectionFactory.instance = new ConnectionFactory(url)
    return ConnectionFactory.instance
  }

  connect = async (): Promise<void> => {
    if (!this.connection) this.connection = await mongoDBConnect(this.url)
  }

  getConnection = ():typeof mongoose | undefined => {
    return this.connection
  }
}
