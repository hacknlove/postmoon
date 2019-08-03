const glob = require('glob')
const runner = require('./runner')
const { readFile } = require('fs')
const { normalize } = require('path')

function addJs (req, res, next, filename) {
  readFile(`${req.params.test}/${filename}.js`, {encoding: 'utf8'}, (e, data) => {
    if (e) {
      if (e.code === 'ENOENT') {
        return next()
      }
      return res.render('error', {
        filename: normalize(`${req.params.test}/${filename}.js`),
        error: e
      })
    }
    if (!data) {
      return next()
    }
    req.jss = req.jss || []
    req.jss.push({
      filename: normalize(`${req.params.test}/${filename}.js`),
      data
    })
    next()
  })
}

function addJsHandler (filename) {
  return (req, res, next) => {
    addJs(req, req, next, filename)
  }
}

function getScenarioSetup (req, res, next) {
  addJs(req, res, next, req.params.scenario)
}

function getScenario (req, res, next) {
  readFile(`${req.params.test}/${req.params.scenario}.json`, {encoding: 'utf8'}, (e, r) => {
    if (e) {
      return res.render('error', {
        filename: `${req.params.test}/${res.params.scenario}.json`,
        error: e
      })
    }

    try {
      req.response = JSON.parse(r)
    } catch (e) {
      return res.render('error', {
        filename: `${req.params.test}/${req.params.scenario}.json`,
        error: e
      })
    }
    next()
  })
}

function executeTest (req, res, next) {
  req.result = runner({
    jss: req.jss,
    response: req.response,
    scenario: req.scenario
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
  res.render('scenario', {
    test: req.params.test,
    scenario: req.params.scenario,
    result: req.result
  })
}

module.exports = [
  addJsHandler('../config'),
  addJsHandler('config'),
  getScenarioSetup,
  addJsHandler('pre'),
  addJsHandler('test'),
  getScenario,
  executeTest,
  render
]
