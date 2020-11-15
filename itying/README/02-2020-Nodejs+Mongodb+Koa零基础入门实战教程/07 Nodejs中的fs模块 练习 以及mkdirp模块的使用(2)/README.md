## 07 Nodejs中的fs模块 练习 以及mkdirp模块的使用(2)（28分9秒）


- 1、判断服务器上面有没有 upload 目录，如果没有创建这个目录，如果有的话不做操作，（图片上传）
```jsx harmony
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
```
   + 创建目录的模块：`npm install mkdirp`
        - 1、https://www.npmjs.com/package/mkdirp
        - 2、cnpm i mkdirp --save / yarn add mkdir
        - 3、const mkdirp = require('mkdirp'');
        - 4、看文档使用
        - 实例
        ```jsx harmony
            /**
             * - 1、https://www.npmjs.com/package/mkdirp
             * - 2、cnpm i mkdirp --save / yarn add mkdir
             * - 3、const mkdirp = require('mkdirp'');
             * - 4、看文档使用
             */
            const mkdirp = require('mkdirp');
            /*mkdirp('./upload', (err) => {
                if(err) {
                    console.error('创建失败：',err);
                }
            });*/
            
            // 生成一级目录
            /*const made = mkdirp.sync('./upload');
            console.log(made)*/
            
            // 生成多级目录
            const made = mkdirp.sync('./upload/aaa/xxx');
            console.log(made)
        ```
    
- 2、wwwroot 文件夹下面有 images css js 以及 index.html，找出 wwwroot 目录下面的所有的目录，然后放在一个数组中
```jsx harmony
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
    console.log(dirArr); // [ 'css', 'html', 'img', 'js', 'xxx' ]

```