const fs = require('fs')

const readerStream = fs.createReadStream('readerStream.txt')

const writerStream = fs.createWriteStream('pipeStream.txt')

readerStream.pipe(writerStream)

console.log('程序执行完毕')
