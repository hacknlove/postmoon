const cloneDeep = require('clone-deep')
const vm = require('vm')
const chai = require('chai')
const { readFileSync } = require('fs')

const pm = readFileSync(__dirname + '/postman.js', {encoding: 'utf8'})

const pmScript = new vm.Script(pm, {
  filename: 'postman-mock'
})

module.exports = function runner (options) {
  try {
    var script = new vm.Script(options.test, {
      filename: options.filename + '.js'
    })
  } catch (e) {
    console.log(e)
    return {
      error: {
        message: e.message,
        stack: e.stack
      }
    }
  }

  const tests = {}
  var fail = 0
  var pass = 0

  Object.keys(options.responses).forEach(key => {
    const sandbox = {
      chai,
      console,
      fail: 0,
      pass: 0,
      tests: [],
      status: 200,
      environment: cloneDeep(options.environment),
      global: cloneDeep(options.global),
      response: options.responses[key]
    }

    vm.createContext(sandbox)

    pmScript.runInContext(sandbox)
    script.runInContext(sandbox)

    tests[key] = {
      pass: sandbox.pass,
      fail: sandbox.fail,
      tests: sandbox.tests
    }
    fail += sandbox.fail
    pass += sandbox.pass
  })


  return {
    fail,
    pass,
    tests
  }

}
