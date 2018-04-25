const fs = require('fs')

const zlib = require('zlib')

// 压缩文件
fs.createReadStream('readerStream.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('readerStream.zip'))


// 解压文件
// fs.createReadStream('readerStream.zip')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('zipStream.txt'))

console.log('程序执行完毕')
