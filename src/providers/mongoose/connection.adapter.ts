import mongoose from 'mongoose'

export const mongoDBConnect = async (url:string):Promise<typeof mongoose> => {
  const con = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  return con
}
