import * as express from 'express'
import * as path from 'path'

import { server } from './constants/application'
import { env } from './constants/env'

const PORT = process.env.PORT || server.port
const app = express()

app.use(express.static(path.join(process.cwd(), 'public')))

app.listen(PORT, (err: Error) => {
  if (err) {
    global.console.error(err)
  }

  global.console.log(` ⚙️  ${env} app listening @ ${PORT} ⚙️ \n`)
  global.console.log(` --  launched @ ${Date()}  --`)
  global.console.log(
    '---------------------------------------------------------------------------\n\n',
  )
})
