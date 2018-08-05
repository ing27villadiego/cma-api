import Debug from 'debug'
import http from 'debug'
import mongoose from 'mongoose'

import app from './app'

import { port, mongoUrl } from './config/config'

const debug = new Debug('cma-tech:root')

mongoose.Promise = global.Promise

async function start() {

  await mongoose.connect(mongoUrl)

  app.listen(port, () => {
    debug(`Server running at port ${port}`)
  })
}

start()
