'use strict'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import logger from 'morgan'

const app = express()

//rutas de la api rest
import {
  business
} from './routes'

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/business', business)

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // imprimir los error por console
  console.log(res.locals.error);
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

export default app
