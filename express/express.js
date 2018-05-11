const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    next()
})
app.use(bodyParser.urlencoded({
  extended: false
}))
app.get('/', function(req, res){
    res.send('index page')
})

app.get('/about', function(req, res){
    res.send('about page')
})

app.get('/getUser/:username/:age', function(req, res){
    let params = {
        username: req.params.username,
        age: req.params.age
    }
    res.send(params);
})

app.post('/login', function (req, res) {
  let params = {
      username: req.body.username,
      age: req.body.age
  }
  res.send(params);
})

app.listen('8080', function () {
  console.log('Server running on http://localhost:8080')
})
1111
