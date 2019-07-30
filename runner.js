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

  Object.keys(options.scenarios).forEach(key => {
    const sandbox = {
      chai,
      console,
      fail: 0,
      pass: 0,
      tests: [],
      status: options.scenarios[key].status || 200,
      requests: options.scenarios[key].requests || {},
      environment: options.scenarios[key].environment || cloneDeep(options.environment),
      global: options.scenarios[key].global || cloneDeep(options.global),
      json: options.scenarios[key].response || {}
    }

    vm.createContext(sandbox)

    pmScript.runInContext(sandbox)
    try {
      script.runInContext(sandbox)
    } catch (e) {
      sandbox.tests.push({
        test: 'script',
        error: e
      })
      tests[key] = {
        pass: sandbox.pass,
        fail: sandbox.fail + 1,
        tests: sandbox.tests
      }
      fail += sandbox.fail + 1
      pass += sandbox.pass
      return
    }

    tests[key] = {
      expected: {
        pass: options.scenarios[key].pass,
        fail: options.scenarios[key].fail
      },
      actual: {
        pass: sandbox.pass,
        fail: sandbox.fail
      },

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
