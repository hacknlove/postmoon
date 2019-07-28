global.pm = require('./postman')

const app = require('./express')

app.get('/', require('./home'))
app.get('/test/*', require('./test'))
