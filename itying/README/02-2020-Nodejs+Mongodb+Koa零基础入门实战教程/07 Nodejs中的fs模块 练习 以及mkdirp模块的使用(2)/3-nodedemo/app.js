// 2、wwwroot 文件夹下面有 images css js 以及 index.html，找出 wwwroot 目录下面的所有的目录，然后放在一个数组中
const fs = require('fs');

// 错误的写法，注意：fs 里面的的该方法是异步
/*const path = './wwwroot';
// 读取文件目录
let dirArr = [];
fs.readdir(path, (err, data) => {
    if(err){
        console.log('读取目录失败：', err);
        return false;
    }
    // console.log("获取 wwwroot 下面所有的文件：",data);
    for(let i = 0; i < data.length; i++){
        // 检查是文件还是目录
        fs.stat(`${path}/${data[i]}`, (error, stats)=> {
            if(stats.isDirectory()){
                dirArr.push(data[i]);
            }
        });
    }
    console.log(dirArr)
})
console.log(dirArr)*/

// 打印出 3 个 3
    /*
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                console.log(i)
            }, 1000)
        }
    */
    /*
    0
    1
    2
     */

// 第二种方法
/**
 * 1、改造 for 循环， 递归实现
 * 2、nodejs 里面的新特性，async await
 */
// 1、改造 for 循环， 递归实现
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
console.log(dirArr)
