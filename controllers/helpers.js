'use strict'

//esta es una funcion generadora que permite filtrar los campos valido de una tabla
function buildParams(validParams,body){
  let params = {}

  validParams.forEach(attr=>{
    if(Object.prototype.hasOwnProperty.call(body,attr))
      params[attr]= body[attr]
  })

  return params
}

module.exports = { buildParams }
