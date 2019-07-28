const glob = require('glob')

function home (req, res) {
  res.render('home', {
    test: glob.sync('*.js').map(e => e.substr(0, e.length - 3)).filter(e => !e.match(/\.pre$/))
  })
}

module.exports = home
