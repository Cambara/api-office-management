import env from './env.helper'

export const showVerboseLog = ():boolean => !env.isProduction || env.isVerboseLog
