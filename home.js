const glob = require('glob')

function home (req, res) {
  glob('*.js', function (e, r) {
    if (e) {
      return res.render('error', e)
    }

    res.render('home', {
      test: r.map(e => e.substr(0, e.length - 3)).filter(e => !e.match(/\.pre$/))
    })
  })
}

module.exports = home
