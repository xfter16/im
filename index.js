const Sequelize = require('sequelize')
const {green, blue, red, yellow} = require('chalk')

const express = require('express')
const app = express()

main()

async function main(){

  app.set('port', (process.env.PORT || 3000))

  app.get('/', (req, res) => {
    res.end('<h1>Main Page</h1>')
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

}