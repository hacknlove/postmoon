var express = require('express')
const { join } = require('path')

var app = express()
app.set('view engine', 'ejs')
app.use(express.static(join(__dirname, 'public')))
app.set('views', join(__dirname, 'views'))

module.exports = app

app.use((req, res, next) => {
  if (global.error) {
    return res.render('error', global.error)
  }
  next()
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + (process.env.PORT || 3000))
})
