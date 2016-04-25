import * as fbMe from './fbMe.js'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.route('/')
  .get((req, res) => {
    if (req.query.code) {
      fbMe.getToken(req.query.code)
      res.redirect('/?status=ok')
    } else if (req.query.status) {
      res.send(req.query.status)
    } else {
      const loginURL = fbMe.getLoginUrl()
      res.send('<a href="' + loginURL + '">Get access from Facebook</a>')
    }
  })

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
})
