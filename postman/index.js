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
  var name = getFilename()
  console.log(name)
  tests[name] = tests[name] || []
  tests[name].push({
    title,
    callback
  })
}

exports.expect = chai.expect

exports.response = {
  json () {
    return require(getAbsoluteDir() + '/response.json')
  }
}

exports.run = function (name) {
  var informe = {
    pass: 0,
    fail: 0,
    errores: []
  }
  console.log(name)
  tests[name].forEach(test => {
    try {
      test.callback()
      informe.pass++
    } catch (e) {
      informe.errores.push({
        test: test.title,
        error: e.message
      })
      informe.fail++
    }
  })
  return informe
}
