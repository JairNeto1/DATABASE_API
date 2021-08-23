const { Router } = require('express')

const UserController = require('./app/controllers/UserController')

const roures = new Router()

Router.post('/user', UserController.index)

module.exports = routes
