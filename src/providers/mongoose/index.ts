import { ConnectionFactory } from './connection.factory'
import env from '../../shared/helpers/env.helper'

const connectionFactory = ConnectionFactory.getInstance(env.mongoDBHost)

export { connectionFactory }
