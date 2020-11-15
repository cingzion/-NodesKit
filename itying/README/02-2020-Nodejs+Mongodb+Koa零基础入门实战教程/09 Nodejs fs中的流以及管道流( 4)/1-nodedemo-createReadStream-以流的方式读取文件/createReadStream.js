// 09 Nodejs fs中的流以及管道流( 4)
const fs = require('fs');

// 以流的方式读取文件
const readStream = fs.createReadStream('./data/input.txt');

let count = 0;
let str = '';

// 监听-开始读取文件
readStream.on('data', (data) => {
    str += data;
    count++;
});

// 监听-读取完成文件
readStream.on('end', (data) => {
    console.log("监听-读取完成文件 Str：", str);
    console.log("监听-读取完成文件 count：", count);
});

// 监听-读取错误信息
readStream.on('error', (err) => {
    console.log("监听-读取错误信息: ", err);
})
