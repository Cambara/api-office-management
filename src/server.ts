import 'dotenv/config'
import { http } from './main/app'
import { connectionFactory } from './providers/mongoose'

connectionFactory.connect()
  .then(async () => {
    http.listen(process.env.PORT || 3000, () => console.log(`Listing on port ${process.env.PORT || 3000}`))
  })
  .catch(console.error)
