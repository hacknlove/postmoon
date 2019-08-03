const cloneDeep = require('clone-deep')
const vm = require('vm')
const chai = require('chai')
const { readFileSync } = require('fs')

const pm = readFileSync(__dirname + '/postman.js', {encoding: 'utf8'})

const pmScript = new vm.Script(pm, {
  filename: 'postman-mock'
})

module.exports = function runner (options) {
  var fail = 0
  var pass = 0

  const sandbox = {
    __pm: {
      chai,
      fail: 0,
      pass: 0,
      tests: [],
      environment: {},
      global: {},
      response: {
        status: 200
      },
      json: options.response
    },
    console,
  }

  var jss = []

  options.jss.forEach(js => {
    console.log(js)
    try {
      js = {
        filename: js.filename,
        script: new vm.Script(js.data, {
          filename: js.filename
        })
      }
      jss.push(js)
    } catch (e) {
      console.log(e)
      sandbox.__pm.fail++
      sandbox.__pm.tests.push({
        test: js.filename,
        error: e
      })
    }
  })

  vm.createContext(sandbox)

  pmScript.runInContext(sandbox)

  jss.forEach(js => {
    console.log(js.filename)
    try {
      js.script.runInContext(sandbox)
    } catch (e) {
      sandbox.__pm.fail++
      sandbox.__pm.tests.push({
        test: js.filename,
        error: e
      })
    }
  })
  return {
    fail: sandbox.__pm.fail,
    pass: sandbox.__pm.pass,
    tests: sandbox.__pm.tests
  }
}
