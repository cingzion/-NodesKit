// 09 Nodejs fs中的流以及管道流( 4)
const fs = require('fs');

// 以流的方式写入文件
let str = '';

// 循环文件
for (let i = 0; i < 500; i++) {
    str += '我是从数据获取的数据，我要保存起了\n';
}

// 创建以流的方式写入文件
const writeStream = fs.createWriteStream('./data/output.txt');
writeStream.write(str);

// 标记写放完成
writeStream.end();


// 写入完成之后，过行触发监听完成的事件
writeStream.on('finish', () => {
    console.log('写放完成');
})

