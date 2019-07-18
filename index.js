/* global pm */

global.__root = __dirname + '/tests'

global.pm = require('./postman')

const glob = require('glob')

const files = glob.sync('tests/**/test.js')

const response = {}

files.forEach(file => {
  require('./' + file)
})

var express = require('express')
var app = express()
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  
  var archivos = glob.sync('tests/*')
  
  var archivos2 = archivos.map (function (elem) {
    return elem.substring(6)
  })
  
  res.render('home', {
    test: archivos2
  })
})

app.get('/:name', (req, res, next) => {
  var informe = pm.run(req.params.name)
  res.render('index', informe)
})

app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + process.env.PORT)
})
