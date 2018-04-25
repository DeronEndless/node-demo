const fs = require('fs')

let data = ''
// 创建可读流
const readerStream = fs.createReadStream('readerStream.txt')
// 设置编码为utf-8
readerStream.setEncoding('UTF8')

readerStream.on('data', function (chunk) {
  data += chunk
})

readerStream.on('end', function () {
  console.log(data)
})

readerStream.on('error', function (erro) {
  console.log(err.stack)
})

console.log('程序执行完毕')
