/**
 * 1、判断服务器上面有没有 upload 目录，如果没有创建这个目录，
 *    如果有的话不做操作，（图片上传）
 */

const fs = require('fs');

const path = './upload';

// 检测这个目录是否存在
/**
 * fs.stat('第一个参数是路径'， '第二个参数是回调函数(错误信息，返回的数据)');
 */
fs.stat('./upload', (err, data) => {
    if(err) {
        // 执行创建目录
        mkdir(path);
        return false;
    }

    // 第一种方式
    /*if(data.isDirectory()) {
        console.log('upload 目录存在')
    }else{
        // 首先删除文件，再去执行创建目录
        fs.unlink(path, (err) => {
            if(!err) {
                mkdir(path);
            }else{
                console.log('请检测传入的数据是否正确')
            }
        });
    }*/

    // 第二种方式
    if(!data.isDirectory()) {
        // 首先删除文件，再去执行创建目录
        fs.unlink(path, (err) => {
            if(!err) {
                mkdir(path);
            }else{
                console.log('请检测传入的数据是否正确')
            }
        });
    }

});


// 封装一个创建目录
const mkdir = (dir) => {
    fs.mkdir(dir, (err) => {
        if(err) {
            console.log("创建目录失败");
            return false;
        }
        console.log("创建目录成功");
    })
}