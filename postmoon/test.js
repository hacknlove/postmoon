function setPmTestName (req, res, next) {
  pm._setTestName(req.params[0])
  next()
}
function preRequest (req, res, next) {
  try {
    require(`../${req.params[0]}.pre.js`)
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      return res.render('testError', {
        titulo: 'Pre-request script ERROR',
        error: e
      })
    }
  }
  next()
}

function response (req, res, next) {
  try {
    pm._setResponse(require(`../${req.params[0]}.json`))
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      return res.render('testError', {
        titulo: 'JSON error',
        error: e
      })
    }
  }
  next()
}

function loadTest (req, res, next) {
  try {
    require(`../${req.params[0]}.js`)
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      return res.render('testError', {
        titulo: 'Error de sintaxis',
        error: e
      })
    }
  }
  next()
}
function executeTest (req, res, next) {
  const informe = pm._run(req.params[0])
  res.render('test', informe)
}

module.exports = [
  setPmTestName,
  preRequest,
  response,
  loadTest,
  executeTest
]
