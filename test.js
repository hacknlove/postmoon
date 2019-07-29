const glob = require('glob')
const runner = require('./runner')
const { readFile } = require('fs')
const packageJson = require('../package.json')

function getEnvironments (req, res, next) {
  req.global = {
    ...packageJson.global
  }
  req.environment = {
    ...packageJson.environment
  }
  next()
}

function getResponses (req, res, next) {
  glob(`{${req.params[0]}.*.json,${req.params[0]}.json}`, (e, r) => {
    if (e) {
      return res.render('testError', {
        titulo: 'glob error',
        error: e
      })
    }
    req.responses = {}
    r.forEach(path => {
      const name = path.match(/\.([^.]*).json$/) || [null, 'default']
      try {
        req.responses[name[1]] = require(`../${path}`)
      } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
          return res.render('error', {
            filename: path,
            error: e
          })
        }
      }
    })
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
    responses: req.responses,
    global: req.global,
    environment: req.environment
  })
  console.log(req.result)
  if (req.result.error) {
    return res.render('error', {
      filename: req.params[0],
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
  getEnvironments,
  getResponses,
  getTest,
  executeTest,
  render
]
