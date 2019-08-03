const pm = {
  environment: {
    get (variable) {
      if (__pm.environment[variable] !== undefined) {
        return __pm.environment[variable]
      }
      return __pm.global[variable]
    },
    set (variable, value) {
      __pm.environment[variable] = value
    }
  },
  global: {
    get (variable) {
      return __pm.global[variable]
    },
    set (variable, value) {
      __pm.global[variable] = value
    }
  },
  test (title, callback) {
    try {
      callback()
      __pm.tests.push({
        test: title
      })
      __pm.pass++
    } catch (e) {
      __pm.tests.push({
        test: title,
        error: e
      })
      __pm.fail++
    }
  },
  response: {
    get status() {
      return __pm.chai.expect(__pm.response.status)
    },
    json () {
      return __pm.json
    }
  },
  expect: __pm.chai.expect
}
