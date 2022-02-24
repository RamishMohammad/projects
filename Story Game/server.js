const { engine } = require('express-handlebars')
var path = require('path')
var express = require('express')
var fs = require('fs')
var app = express()
var port = process.env.PORT || 3000

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('landingpage')
  res.status(200)
})

app.get('/play', function (req, res) {
  res.render('mainpage')
  res.status(200)
})

app.get('*', function(req, res) {
  res.render('404')
  res.status(404)
})

app.listen(port, function () {
  console.log("== Server is listening on port", port)
})