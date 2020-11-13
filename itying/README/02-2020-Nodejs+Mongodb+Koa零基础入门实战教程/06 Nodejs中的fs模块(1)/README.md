## 06 Nodejs中的fs模块(1)
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


#### 1. fs.stat 检测是文件还是目录
```jsx harmony
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
```

#### 2. fs.mkdir 创建目录
```jsx harmony
    /**
     * fs.mkdir(路径，回调函数)
     * 创建一个目录
     */
    
    fs.mkdir("./css", (err)=>{
        if(err){
            console.log("创建失败：", err);
        }
    
        console.log("创建成功")
    })

```

#### 3. fs.writeFile 创建写入文件
```jsx harmony
    /**
     *
     * fs.writeFile(创建写文件文件地址，文件内容)
     *
     * 说明：当前的文件不存在，就创建，存在就替换
     *
     */
    
    const createHtmlTemplate = (text) => {
        return (
            `
            <!doctype html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport"
                              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>Document</title>
                    </head>
                    <body>
                        <h1>{text}--哈哈</h1>
                    </body>
                </html>
            `
        );
    };
    
    
    
    fs.writeFile('./html/index.html', createHtmlTemplate('你好 NodeJS'), (error) => {
        if (error){
            console.log("写放文件失败：", error)
        }
    
        console.log("创建写文件文件成功！")
    });
```

#### 4. fs.appendFile 追加文件
```jsx harmony
    /**
     * 说明：当前的文件不存在，就创建，存在就追加
     */
    /*
    fs.appendFile("./css/base.css", 'body{color: red}', (err) => {
        if (err){
            console.log("追加文件失败：", err)
        }
    
        console.log("追加文件文件成功！")
    });*/
    
    fs.appendFile("./css/base.css", '\nh2{color: red}', (err) => {
        if (err){
            console.log("追加文件失败：", err)
        }
    
        console.log("追加文件文件成功！")
    });

```

#### 5.fs.readFile 读取文件
```jsx harmony
    
    /**
     * fs.readFile(文件路径, 回调函数(错误信息，读取的数据))
     */
    fs.readFile('./html/index.html', (err, data) => {
        if (err){
            console.log("读取文件失败：", err);
            return;
        }
    
        console.log("读取文件成功！", data);
        // 读取文件成功！ <Buffer 0a 20 20 20 20 20 20 20 20 3c 21 64 6f 63 74 79 70 65 20 68 74 6d 6c 3e 0a 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 3c 68 74 6d 6c 20 6c 61 6e ... 508 more bytes>
        console.log("读取文件成功并把 Buffer 转化成 string 类型：", data.toString());
    
    });
    /*
    读取文件成功并把 Buffer 转化成 string 类型：
            <!doctype html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport"
                              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>Document</title>
                    </head>
                    <body>
                        <h1>{text}--哈哈</h1>
                    </body>
                </html>
    
    
    Process finished with exit code 0
    
     */
```

#### 6.fs.readdir 读取目录 
```jsx harmony
    fs.readdir('./html', (err, data) => {
        if (err){
            console.log("读取目录失败：", err);
            return;
        }
    
        console.log("读取目录成功！", data); // 读取目录成功！ [ 'index.html', 'js', 'news.html' ]
    });
```

#### 7.fs.rename 重命名  
- 功能：
    + 1、表示重命名
    + 2、移动文件
```jsx harmony
    /**
     *
     * fs.rename('要修改的路径的文件名'，'修改后的文件路径的文件名', 回调函数(错误信息))
     * - 功能：
     *  + 1、表示重命名
     *  + 2、移动文件
     */
    // 修改文件名
    /*fs.rename('./css/aaa.css', './css/index.css', (err) => {
        if(err){
            console.log('重命名失败：',err);
            return;
        }
    
        console.log('重命名成功！'); // 重命名成功！
    });*/
    
    // 移动文件
    fs.rename('./css/index.css', './html/index.css', (err)=>{
        if(err){
            console.log('移动文件失败：',err);
            return;
        }
    
        console.log('移动文件成功！'); // 移动文件成功！
    });
```

#### 8. fs.rmdir 删除目录 
```jsx harmony
     // 8. fs.rmdir 删除目录
    /**
     * fs.rmdir(要删除的目录路径， 回调函数(错误信息))
     * 如果文件目录里有文件，那么就会删除失败，
     */
    fs.rmdir('./aaa', (err) => {
        if(err){
            console.log('删除目录 失败：',err);
            return;
        }
    
        console.log('删除目录 成功！'); // 删除目录 成功！
    });
```

#### 9. fs.unlink 删除文件
```jsx harmony
    fs.unlink('./aaa/index.html', (err) => {
        if(err){
            console.log('删除文件 失败：',err);
            return;
        }
    
        console.log('删除文件 成功！'); // 删除文件 成功！
    })
```