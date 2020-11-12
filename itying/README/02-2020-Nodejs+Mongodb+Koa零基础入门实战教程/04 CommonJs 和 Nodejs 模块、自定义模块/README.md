## 04 CommonJs 和 Nodejs 模块、自定义模块

#### 一、什么是 CommonJs?
```jsx harmony
    JavaScript 是一个强大面向对象语言，它有很多快速高效的解释器。然而， JavaScript 标准定义的 API 是为了构建基于浏览器的应用程序。并没有制定一个用于更广泛的应用程序 的标准库。 库的缺陷。它的
    ，Ruby 和 Java   ,而不只是让 JavaScript 停 留在小脚本程序的阶段。用 CommonJS API 编写出的应用，不仅可以利用 JavaScript 开发客
    户端应用，而且还可以编写以下应用。 •服务器端 JavaScript 应用程序。(nodejs) •命令行工具。
    •桌面图形界面应用程序。

    CommonJS 就是模块化的标准，nodejs 就是 CommonJS(模块化)的实现。
```

#### 自定义模块
```jsx harmony
    const http = require('http');   // 引入 http 模块
    const url = require('url');     // 引入 url 模块
    
    
    // 自定义模块
    const formatApi = (api) => {
        return `htp://www.baidu.com/${api}`;
    }
    
    /**
     * req 获取客户端传过来的信息
     * res 给浏览器响应信息
     */
    const server = http.createServer((req, res) => {
        // http://127.0.0.1?name=zhangsan&age=20  想获取 url 传过来的 name 和 age
        /*
           设置响应头
               状态码 200
               文件类型 html
               字符集是 utf-8
         */
        res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"}) // 解决乱码
        res.write(`<head><meta charset="UTF-8" /></head>`); // 设置文件编码，解决乱码
    
    
        // const reqUrl = req.url; // 获取浏览器访问的地址
    
        if(req.url !== '/favicon.ico'){
            const userInfo = url.parse(req.url, true).query;
            const userStr = `姓名: ${userInfo.name}; 年龄: ${userInfo.age}`
            console.log("打印结果：", userInfo); // 打印结果： [Object: null prototype] { name: 'zhangsan', age: '20' }
            console.log("用户信息：", userStr);  // 用户信息： 姓名: zhangsan; 年龄: 20
    
        }
    
        res.write("你好 NodeJS！!!!");
    
        res.write(`<h2>你好 NodeJS！</h2>`);
    
        const api = formatApi('api/plist');
        res.write(api);
        res.end(); // 结束响应
    });
    
    server.listen(3000, () => {
        console.log(`服务启动成功：http://localhost:3000`);
    })
    
    

```


#### 模块化
- 自定义模块 
```jsx harmony
    // module/tools.js
    const formatApi = (api) => {
        return `http://www.baidu.com/${api}`;
    };
    
    exports.formatApi = formatApi;
```
- 使用模块化
```jsx harmony
    // app.js
    const http = require('http');   // 引入 http 模块
    const url = require('url');     // 引入 url 模块
    const tools = require('./module/tools'); // 引入自定义模块
    
    console.log(tools); // { formatApi: [Function: formatApi] }
    
    /**
     * req 获取客户端传过来的信息
     * res 给浏览器响应信息
     */
    const server = http.createServer((req, res) => {
        // http://127.0.0.1?name=zhangsan&age=20  想获取 url 传过来的 name 和 age
        /*
           设置响应头
               状态码 200
               文件类型 html
               字符集是 utf-8
         */
        res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"}) // 解决乱码
        res.write(`<head><meta charset="UTF-8" /></head>`); // 设置文件编码，解决乱码
    
    
        // const reqUrl = req.url; // 获取浏览器访问的地址
    
        if(req.url !== '/favicon.ico'){
            const userInfo = url.parse(req.url, true).query;
            const userStr = `姓名: ${userInfo.name}; 年龄: ${userInfo.age}`
            console.log("打印结果：", userInfo); // 打印结果： [Object: null prototype] { name: 'zhangsan', age: '20' }
            console.log("用户信息：", userStr);  // 用户信息： 姓名: zhangsan; 年龄: 20
    
        }
    
        res.write("你好 NodeJS！!!!");
    
        res.write(`<h2>你好 NodeJS！</h2>`);
    
        const api = tools.formatApi('api/focus');
        res.write(api);
        res.end(); // 结束响应
    });
    
    server.listen(3000, () => {
        console.log(`服务启动成功：http://localhost:3000`);
    })
    
    

```

#### 2.2CommonJS(Nodejs)中自定义模块的规定:
- 1.我们可以把公共的功能抽离成为一个单独的 js 文件作为一个模块，默认情况下面这 个模块里面的方法或者属性，外面是没法访问的。如果要让外部可以访问模块里面的方法或 者属性，就必须在模块里面通过 exports 或者 module.exports 暴露属性或者方法。
- 2.在需要使用这些模块的文件中，通过 require 的方式引入这个模块。这个时候就可 以使用模块里面暴露的属性和方法。


#### 引入模块的三种方式
```jsx harmony
    const http = require('http');   // 引入 http 模块
    const url = require('url');     // 引入 url 模块
    // 第一种引入的方法
    // const axios = require('./node_modules/axios/index');
    
    // 第二种引入的方法
    /*
    const axios = require('axios/index');
    axios.get();
    axios.post();
    */
    
    // 第三种引入的方法
    const axios = require('axios');
    axios.get();
    axios.post();
    /**
     * req 获取客户端传过来的信息
     * res 给浏览器响应信息
     */
    const server = http.createServer((req, res) => {
        // http://127.0.0.1?name=zhangsan&age=20  想获取 url 传过来的 name 和 age
        /*
           设置响应头
               状态码 200
               文件类型 html
               字符集是 utf-8
         */
        res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"}) // 解决乱码
        res.write(`<head><meta charset="UTF-8" /></head>`); // 设置文件编码，解决乱码
    
    
        // const reqUrl = req.url; // 获取浏览器访问的地址
    
        if(req.url !== '/favicon.ico'){
            const userInfo = url.parse(req.url, true).query;
            const userStr = `姓名: ${userInfo.name}; 年龄: ${userInfo.age}`
            console.log("打印结果：", userInfo); // 打印结果： [Object: null prototype] { name: 'zhangsan', age: '20' }
            console.log("用户信息：", userStr);  // 用户信息： 姓名: zhangsan; 年龄: 20
    
        }
    
        res.write("你好 NodeJS！!!!");
    
        res.write(`<h2>你好 NodeJS！</h2>`);
    
        res.end(); // 结束响应
    });
    
    server.listen(3000, () => {
        console.log(`服务启动成功：http://localhost:3000`);
    })
    
    

```