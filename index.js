import Debug from 'debug'
import http from 'debug'
import app from './app'

import { port } from './config/config'

const debug = new Debug('cma-tech:root')


async function start() {

  app.listen(port, () => {
    debug(`Server running at port ${port}`)
  })
}

start()
