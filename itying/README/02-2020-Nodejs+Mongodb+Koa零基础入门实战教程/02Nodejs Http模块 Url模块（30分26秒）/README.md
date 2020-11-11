## 02Nodejs Http模块 Url模块（30分26秒）


#### 一、Node.js 创建第一个应用
- 创建一个 NodeJS 服务
```js
    // 表示引入 http 模块
    let http = require('http');
    
    /**
     * request  获取 url 传过来的信息
     * response 给浏览器响应信息
     */
    const server = http.createServer((request, response) => {
        // 设置响应头
        response.writeHead(200, {"Content-Type": "text/plain"});
    
        // 表示给我们页面输出一句话并且结束响应
        response.end("Hello World");
    
    
    });
    // 端口号
    server.listen(8080, () => {
        console.log(`Node服务启动成功：http://localhost:8080`)
    })
```




#### 二、HTTP 模块、URL 模块
- Node.js 中，将很多的功能，划分为了一个个 module(模块)。 Node.js 中的很多功能都是通过模块实现。

- 2.1、HTTP 模块的使用
```js
    // 表示引入 http 模块
    const http = require('http');
    
    /**
     * req  获取 url 传过来的信息
     * res  给浏览器响应信息
     */
    const server = http.createServer((req, res) => {
        console.log(req.url); // 获取 url
    
        // 设置响应头
        /**
         * 状态码是 200
         * 文件类型是 html
         * 字符集是 utf-8
         *
         */
        res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});
    
        // 设置编码 解决乱码
        res.write(`<head><meta charset="UTF-8"></head>`)
        res.write('this is node');
        res.write('你好 Node JS');
    
        res.end(); // 结束响应
    });
    
    // 监听端口 8080
    server.listen(8080, () => {
        console.log(`Node服务启动成功：http://localhost:8080`)
    })
```

- 2.2、URL 模块的使用