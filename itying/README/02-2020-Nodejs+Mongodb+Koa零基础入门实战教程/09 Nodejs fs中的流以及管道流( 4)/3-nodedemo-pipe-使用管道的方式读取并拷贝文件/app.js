// 使用管道流

const fs = require('fs');

// 创建一个读取流
const readStream = fs.createReadStream('./caption.jpg');
// 创建一个写入流
const writeStream = fs.createWriteStream('./data/caption.jpg');

readStream.pipe(writeStream);