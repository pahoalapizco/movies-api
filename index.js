const express = require('express')
const { config } = require('./config/')
const moviesApi = require('./routes/movies')

const app = express()

moviesApi(app)


app.listen(config.port, function(){
  console.log(`Aplication running on http://localhost:${config.port}`)
})