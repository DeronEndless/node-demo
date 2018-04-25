const fs = require('fs')

const data = '鲸鱼小班'

const writerStream = fs.createWriteStream('writerStream.txt')

writerStream.write(data, 'UTF8')

writerStream.end()

writerStream.on('finish', function () {
  console.log('写入完成')
})

writerStream.on('error', function (err) {
  console.log(err.stack)
})

console.log('程序执行完毕')
