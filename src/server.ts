import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cookiParser from 'cookie-parser'
import * as express from 'express'
import * as morgan from 'morgan'
import * as path from 'path'
import * as favicon from 'serve-favicon'

import { server } from './constants/application'
import { env } from './constants/env'

const PORT = process.env.PORT || server.port
const app = express()

app.use(compression())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookiParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public/assets/img/favicon.ico')))

app.listen(PORT, err => {
  if (err) {
    global.console.error(err)
  }

  global.console.log(` ⚙️  ${env} app listening @ ${PORT} ⚙️ \n`)
  global.console.log(` --  launched @ ${Date()}  --`)
  global.console.log(
    '-------------------------------------------------------------------------------------\n\n',
  )
})
