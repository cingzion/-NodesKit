
/**
 * 1、改造 for 循环， 递归实现
 * 2、nodejs 里面的新特性，async await
 */
// 1、改造 for 循环， 递归实现
/*
const path = './wwwroot';
let dirArr = [];
fs.readdir(path, (err, data) => {
    if(err){
        console.log(err);
    }
    // 递归实现
    (function getDir(i){
        if(i === data.length){ // // 执行完成
            console.log(dirArr);
            return false;
        }
        fs.stat(`${path}/${data[i]}`, (error, stats) =>{
            if(stats.isDirectory()) {
                dirArr.push(data[i])
            }
            // 自己调用自己
            getDir(i+1);
        })
    })(0)
});
console.log(dirArr)*/

const fs = require('fs');

// TODO: 1、定义一个 isDir 的方法判断一个资源是目录还是文件
const isDir = async (path) => {
    return new Promise((resolve, reject) => {
        fs.stat(path, (error, stats) => {

            if(error) {
                reject(error);
                return;
            }

            if(stats.isDirectory()) {
                resolve(true);
            }else{
                resolve(false);
            }

        });
    })
};

// TODO: 2、获取 wwwroot 里面的所遥资料，循环遍历

const main = () => {
    const path = './wwwroot';
    const dirArr = [];
    fs.readdir(path, async (err, data) => {
       if(err) {
           console.log(err);
           return;
       }

        for (let i = 0; i < data.length; i++) {
            if(await isDir(`${path}/${data[i]}`)) {
                dirArr.push(data[i]);
            }
        }

        console.log(dirArr)
    });
}
main(); // [ 'css', 'html', 'img', 'js', 'xxx' ]