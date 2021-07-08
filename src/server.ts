import 'dotenv/config'
import { http } from './main/app'

http.listen(process.env.PORT || 3000, () => console.log(`Listing on port ${process.env.PORT || 3000}`))
