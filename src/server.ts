import * as express from 'express'
import * as http from 'http'

import { env } from './constants/env'

const PORT = process.env.PORT || 3000
const app = express()

const server = http.createServer(app)

server.listen(PORT, () => {
  global.console.log(` ⚙️  ${env} app listening @ ${PORT} ⚙️ \n`)
  global.console.log(` --  launched @ ${Date()}  --`)
  global.console.log(
    '-------------------------------------------------------------------------------------\n\n',
  )
})
