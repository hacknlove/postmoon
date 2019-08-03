const glob = require('glob')
const runner = require('./runner')
const { readFile } = require('fs')

function getScenarios (req, res, next) {
  glob(`${req.params.test}/*.json`, (e, r) => {
    if (e) {
      return res.render('error', e)
    }
    r = r.map(e => {
      e = e.substring(req.params.test.length + 1, e.length - 5)
      if (e === '.') {
        e = ''
      }
      return e
    })
    res.render('test', {
      test: req.params.test,
      scenarios: r
    })
  })
}


module.exports = getScenarios
