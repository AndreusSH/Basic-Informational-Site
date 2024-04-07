const http = require('http')
//create a server object:
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
//Server runs on localhost:8080
