/* global __root */
const chai = require('chai')

const environment = {}
const tests = {}

function getAbsoluteDir () {
  var a = new Error()
  return a.stack.split('\n', 4)[3].match(/\((.*)\//)[1]
}
function getFilename () {
  var a = new Error()
  return a.stack.split('\n', 4)[3].match(/\((.*?):/)[1].substr(__root.length)
}

exports.setEnvironment = function (variable, value) {
  environment[variable] = value
}

exports.getEnvironment = function (variable) {
  return environment[variable]
}

exports.test = function (title, callback) {
  tests[getFilename()] = {
    title: title,
    callback: callback
  }
 // ([getFilename(), title, callback])
}

exports.expect = chai.expect

exports.response = {
  json () {
    return require(getAbsoluteDir() + '/response.json')
  }
}

exports.run = function () {
  var informe = {
    pass: 0,
    fail: 0,
    errores: []
  }
  tests.forEach(test => {
    try {
      test[2]()
      informe.pass++
    } catch (e) {
      informe.errores.push({
        filename: test[0],
        test: test[1],
        error: e.message
      })
      informe.fail++
    }
  })
  return informe
}
