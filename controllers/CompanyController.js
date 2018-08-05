'use strict'

import Company from '../models/Company'

//import generador de parametros permitodos por modelo
const helpers = require('./helpers')

// parametros validos del modelo Company
const validParams = ['nit','companyname','address','niif','email','pbx']

function find(req,res,next)
{
  Company.findById(req.params.id)
    .then(company=>{
      req.company = company
      next()
    }).catch(err=>{
      next(err)
    })
}

function index(req,res,next)
{
  Company.paginate({}, { page: req.query.page || 1, limit: 1, sort: {'_id': -1 } })
    .then(docs=>{
      res.json(docs)
    }).catch(error=>{
      res.status(422).json({
        message: "Error al listar las empresas",
        error
      })
    })
}

function create(req, res, next){

  const params = helpers.buildParams(validParams, req.body)

  Company.create(params)
    .then(company=>{
      res.status(200).json({
        company
      })
    }).catch(error=>{
      res.status(422).json({
        message: "Error al crear la Empresa",
        error
      })
    })
}

function show(req,res,next)
{
  //Busqueda individual
  res.json(req.company)
}

function update(req, res)
{
    //Actualizar un recurso
   const params = helpers.buildParams(validParams,req.body)
    req.company = Object.assign(req.company, params )
    req.company.save().then(doc=> {
          res.json(doc)
        }).catch(err=>{
          console.log(err)
          res.json(err)
        })
}

function destroy(req, res)
{
    ////Eliminar un recurso
    req.company.remove().then(doc=>{
      res.json({})
    }).catch(err=>{
      console.log(err)
      res.json(err)
    })
}


module.exports = { index, create, show, update, destroy, find }
