/* global __root */
const chai = require('chai')

const environment = {}
const tests = {}
const responses = {}
const status = {}

var testName

exports._setTestName = function _setTestName (name) {
  testName = name
  environment[name] = environment[name] || {}
  tests[name] = tests[name] || []
  responses[name] = {}
  status[name] = 200
}
exports._setResponse = function _setResponse (response) {
  responses[testName] = response
}
exports._setStatus = function _setStatus (stat) {
  status[testName] = stat
}
exports._run = function (name) {
  var informe = {
    pass: 0,
    fail: 0,
    errores: []
  }
  testName = name
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



exports.environment = {
  get (variable) {
    return environment[testName][variable]
  },
  set (variable, value) {
    environment[testName][variable] = value
  }
}


exports.test = function (title, callback) {
  tests[testName].push({
    title,
    callback
  })
}

exports.expect = chai.expect

exports.response = {
  status: chai.expect(status[testName]),
  json () {
    return responses[testName]
  }
}
