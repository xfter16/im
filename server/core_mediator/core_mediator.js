const {green, blue, red, yellow} = require('chalk')

const express = require('express')
const app = express()

async function coreMediator(port = 3000){

  app.set('port', (process.env.PORT || port))

  app.get('/', (req, res) => {
    res.status(200)
    res.end('<h1>Hello from core_mediator</h1>')
  })

  app.use('/*', (req, res) => {
    res.status(404).send({
      status: 'error',
      message: `Route ${req.url} for method ${req.method} not found`,
    })
  })

  app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
  })

  return app

}

module.exports = coreMediator