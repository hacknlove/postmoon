global.__root = __dirname + '/tests'

global.pm = require('./postman')

const glob = require('glob')

const files = glob.sync('tests/**/test.js')

const response = {}

files.forEach(file => {
  require('./' + file)
})

var informe = pm.run()

var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
  res.render('index', informe)
})
app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})
