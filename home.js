const glob = require('glob')

function home (req, res) {
  glob('*/', function (e, r) {
    if (e) {
      return res.render('error', e)
    }

    res.render('home', {
      test: r.filter(e => e !== 'node_modules/').map(e => e.replace(/\/$/, ''))
    })
  })
}

module.exports = home
