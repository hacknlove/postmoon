/* global __root */
const chai = require('chai')

const global = {}
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
    name,
    pass: 0,
    fail: 0,
    tests: []
  }
  testName = name
  tests[name].forEach(test => {
    try {
      test.callback()
      informe.tests.push({
        test: test.title
      })
      informe.pass++
    } catch (e) {
      informe.tests.push({
        test: test.title,
        error: e
      })
      informe.fail++
    }
  })
  return informe
}



exports.environment = {
  get (variable) {
    if (environment[testName][variable] !== undefined) {
      return environment[testName][variable]
    }
    return global[variable]
  },
  set (variable, value) {
    environment[testName][variable] = value
  }
}

exports.global = {
  get (variable) {
    return global[variable]
  },
  set (variable, value) {
    global[variable] = value
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
