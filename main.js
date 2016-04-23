require('babel-core/register')
require('babel-polyfill')

// require('./fbLiveVideo.js')
require('./fbMessage.js')

var express = require('express')
var app = express()
var request = require('request')
var bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.route('/')
  .get(function (req, res) {
    res.send(req.query.code)
  })
  .post(function (req, res) {
    console.log(req.body)
    res.send('ok')
  })

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});