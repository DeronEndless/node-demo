const http = require('http')
const url = require('url')
const querystring = require('querystring')
const util = require('util')

const server = http.createServer(function (req, res) {
  var postHtml = `<html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <form method="post"><input name="name"><input name="url"><input type="submit"></form>
    </body>
  </html>`
  var post = ''

  req.on('data', function (chunk) {
    post += chunk
  })

  req.on('end', function () {
    post = querystring.parse(post)

    if (post.name && post.url) {
      res.write(`${post.name}`)
      res.write('<br>')
      res.write(`${post.url}`)
    } else {
      res.write(postHtml)
    }
    res.end()
  })
})
server.listen(8080)
