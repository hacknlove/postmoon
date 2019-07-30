const glob = require('glob')
const runner = require('./runner')
const { readFile } = require('fs')

function getGlobal (req, res, next) {
  const global = readFile('global.json', {encoding: 'utf8'}, (e, r) => {
    if (e) {
      return res.render('error', {
        filename: 'global.json',
        error: e
      })
    }

    try {
      req.global = JSON.stringify(global)
    } catch (e) {
      return res.render('error', {
        filename: 'global.json',
        error: e
      })
    }
    next()
  })
}

function getEnvironment (req, res, next) {
  const environment = readFile('environment.json', {encoding: 'utf8'}, (e, r) => {
    if (e) {
      return res.render('error', {
        filename: 'environment.json',
        error: e
      })
    }

    try {
      req.environment = JSON.stringify(environment)
    } catch (e) {
      return res.render('error', {
        filename: 'environment.json',
        error: e
      })
    }
    next()
  })
}


function getScenarios (req, res, next) {
  const scenarios = readFile(`${req.params[0]}.json`, {encoding: 'utf8'}, (e, r) => {
    if (e) {
      return res.render('error', {
        filename: `${req.params[0]}.json`,
        error: e
      })
    }

    try {
      req.scenarios = JSON.stringify(scenarios)
    } catch (e) {
      return res.render('error', {
        filename: `${req.params[0]}.json`,
        error: e
      })
    }
    next()
  })
}

function getTest (req, res, next) {
  readFile(`${req.params[0]}.js`, {encoding: 'utf8'}, (e, data) => {
    if (e) {
      return res.render('error', {
        filename: req.params[0],
        error: e
      })
    }
    req.file = data
    next()
  })
}

function executeTest (req, res, next) {
  req.result = runner({
    filename: req.params[0],
    test: req.file,
    scenarios: req.scenarios,
    global: req.global,
    environment: req.environment
  })
  if (req.result.error) {
    return res.render('error', {
      filename: `${req.params[0]}.js`,
      error: req.result.error
    })
  }
  next()
}

function render (req, res, next) {
  console.log(req.result)
  res.render('test', {
    filename: req.params[0],
    result: req.result
  })
}

module.exports = [
  getGlobal,
  getEnvironment,
  getScenarios,
  getTest,
  executeTest,
  render
]
