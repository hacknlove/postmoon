const pm = {
  environment: {
    get (variable) {
      if (environment[variable] !== undefined) {
        return environment[variable]
      }
      return global[variable]
    },
    set (variable, value) {
      environment[variable] = value
    }
  },
  global: {
    get (variable) {
      return global[variable]
    },
    set (variable, value) {
      global[variable] = value
    }
  },
  test (title, callback) {
    try {
      callback()
      tests.push({
        test: title
      })
      pass++
    } catch (e) {
      console.log(e)
      tests.push({
        test: title,
        error: e
      })
      fail++
    }
  },
  response: {
    status: chai.expect(status),
    json () {
      return response
    }
  },
  expect: chai.expect
}
