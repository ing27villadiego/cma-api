'use strict'

import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const companySchema = new mongoose.Schema({
  nit: {
    type: String,
    required: true,
    unique: true
  },
  companyname: {
    type: String,
    required: true,
    unique: true
  },
  address: String,
  niif: String,
  email: String,
  pbx: String
})

companySchema.plugin(mongoosePaginate)

const Company = mongoose.model('Company', companySchema)

export default Company
