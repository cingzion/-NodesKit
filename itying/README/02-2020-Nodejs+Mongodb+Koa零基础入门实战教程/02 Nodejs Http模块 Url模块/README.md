## 02Nodejs Http模块 Url模块


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
    - url.parse() 解析 URL
    - url.format(urlObject)
    - url.resolve(form, to)
    > 命令行下面执行
    ```jsx harmony
      > url.parse("http://www.baidu.com?a=xxx", true);
      Url {
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'www.baidu.com',
        port: null,
        hostname: 'www.baidu.com',
        hash: null,
        search: '?a=xxx',
        query: [Object: null prototype] { a: 'xxx' },
        pathname: '/',
        path: '/?a=xxx',
        href: 'http://www.baidu.com/?a=xxx'
      }
      > 

    ```
    - 实例代码
    ```jsx harmony
      // url 模块
      const url = require('url');
      
      const api = "http://www.baidu.com?name=zhangsan&age=20";
      const urlParse = url.parse(api, true);
      console.log("输出结果如下：", urlParse);
      /*
      输出结果如下： Url {
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'www.baidu.com',
        port: null,
        hostname: 'www.baidu.com',
        hash: null,
        search: '?name=zhangsan&age=20',
        query: [Object: null prototype] { name: 'zhangsan', age: '20' },
        pathname: '/',
        path: '/?name=zhangsan&age=20',
        href: 'http://www.baidu.com/?name=zhangsan&age=20'
      }
       */
      
      // const getValue = url.parse(api, true).query;
      const { query } = url.parse(api, true);
      const { name, age} = query;
      console.log("输出结果如下: ",query)
      /*
          输出结果如下:  [Object: null prototype] { name: 'zhangsan', age: '20' }
       */
      console.log(`姓名：${name}; 年龄：${age}`) // 姓名：zhangsan; 年龄：20

    ```
  
### 三、获取 url 参数传值
```jsx harmony
   const http = require('http');   // 引入 http 模块
   const url = require('url');     // 引入 url 模块
   
   
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
   
       res.write("你好 NodeJS！");
   
       res.write(`<h2>你好 NodeJS！</h2>`);
   
       res.end(); // 结束响应
   });
   
   server.listen(3000, () => {
       console.log(`服务启动成功：http://localhost:3000`);
   })
 
```