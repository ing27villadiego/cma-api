'use strict'

import express from 'express'

import companyController from '../controllers/CompanyController'

const router = express.Router()

      router.route('/')
        .get(companyController.index)
        .post(companyController.create)

      router.route('/:id')
        .get(companyController.find,companyController.show)
        .put(companyController.find,companyController.update)
        .delete(companyController.find,companyController.destroy)


module.exports = router
