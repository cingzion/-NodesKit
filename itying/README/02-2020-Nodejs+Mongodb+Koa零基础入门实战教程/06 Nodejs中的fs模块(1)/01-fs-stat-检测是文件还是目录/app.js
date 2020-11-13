/*
06 Nodejs中的fs模块(1):
    1. fs.stat 检测是文件还是目录
    2. fs.mkdir 创建目录
    3. fs.writeFile 创建写入文件
    4. fs.appendFile 追加文件
    5.fs.readFile 读取文件
    6.fs.readdir 读取目录
    7.fs.rename 重命名
    8. fs.rmdir 删除目录
    9. fs.unlink 删除文件
    10. fs.createReadStream 从文件流中读取数据
    11. fs.createWriteStream 写入文件
    12. 管道流
 */

const fs = require('fs');

// 1、fs.stat 检测是文件还是目录
/**
 * stat 里有两个参数
 *  1、fs.stat(文件路径, 回调函数(错误信息, 返回的数据));
 *      + 回高函数里有两个参数
 *          error 第一个是错误信息，
 *          data  第二个是返回的数据
 */
fs.stat('./html', (error, data) => {
    // error 是错误信息
    // data  是返回的数据
    if(error){
        console.log("错误信息",error);
        return;
    }

    console.log(`是文件：${data.isFile()}`);        // 是文件：false
    console.log(`是目录：${data.isDirectory()}`);   // 是目录：true

})
