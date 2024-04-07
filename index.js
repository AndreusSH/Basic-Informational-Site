//const http = require('http')
const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'templates', '/home.html'))
})
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'templates', '/about.html'))
})
app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'templates', '/contact.html'))
})
app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'templates', '/error.html'));
  });

app.listen(port)
console.log('Server started at http://localhost:' + port)
/*
http
  .createServer(function (req, res) {
    if (req.url === '/') {
      res.write('<h1>Hello to our home page</h1>')
    } else if (req.url === '/about') {
      res.write('<h1>Short history about me</h1>')
    } else if (req.url === '/contact') {
      res.write('<h1>Contact me me</h1>')
    } else {
      res.write('Error')
    }
    res.end() //end the response
  })
  .listen(8080)
*/
