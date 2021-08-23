const express = require('express')
const cors = require('cors')
const routes = require('./routes')

class app {
  constructor() {
    this.app = expresss
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express, json)

    this.app.use((res, req, next) => {
      res.header('Access-Controll-Allow-Origin', '*')
      res.header('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE')
      res.header(
        'Access-Controll-Allow-Headers',
        'Content-Type, Authorization, Acept,Origin, X-Requested-With'
      )

      this.app.use(cors())
      next()
    })
  }

  routes() {
    this.app.use(routes)
  }
}

module.exports = new app().app
