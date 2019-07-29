var express = require('express')

var app = express()
app.set('view engine', 'ejs')
app.use(express.static('./postmoon/public'))
app.set('views', './postmoon/views')
module.exports = app

app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + process.env.PORT)
})
