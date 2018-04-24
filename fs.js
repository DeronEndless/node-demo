const fs = require('fs')

// 读取文件，异步
fs.readFile('demotext.txt', function (err, data) {
  if (err) {
    return console.error(err)
  }
  console.log(`异步读取: ${data}`)
})

// 读取文件，同步
var data = fs.readFileSync('demotext.txt')
console.log(`同步读取：${data}`)


fs.writeFile('writeText.txt', '我是写入的内容-_-', function (err, data) {
  if (err) {
    return console.error(err)
  }
  console.log('文件写入成功')
  console.log('-------------------我是分割写------------------------')
  console.log('读取文件')
  fs.readFile('writeText.txt', function (err, data) {
    if (err) {
      return console.error(err)
    }
    console.log(`读取写入文件: ${data}`)
  })
})

fs.appendFile('writeText.txt', '我是追加写入的内容', function (err, data) {
  if (err) {
    return console.error(err)
  }
  console.log('文件写入成功')
  console.log('-------------------我是分割写------------------------')
  console.log('读取文件')
  fs.readFile('writeText.txt', function (err, data) {
    if (err) {
      return console.error(err)
    }
    console.log(`读取追加写入内容: ${data}`)
  })
})
