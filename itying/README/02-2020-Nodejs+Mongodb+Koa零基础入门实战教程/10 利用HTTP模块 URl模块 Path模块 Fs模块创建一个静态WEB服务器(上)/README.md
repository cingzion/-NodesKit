## 10 利用HTTP模块 URl模块 Path模块 Fs模块创建一个静态WEB服务器(上)

- 1、web服务器
```js
    // 10 利用HTTP模块 URl模块 Path模块 Fs模块创建一个静态WEB服务器(上)
    const http = require('http');
    const fs = require('fs');
    
    const server = http.createServer((req, res) => {
        // http://127.0.0.1:8080/login.html
        // http://127.0.0.1:8080/index.html
        // 1、获取地址
        console.log(req.url);
        let pathname = req.url;
        console.log('pathname 路径名字：', pathname)
    
        pathname = pathname === '/' ? `/index.html` : pathname;
    
    
        // 2、通过 fs 模块读取文件
        if(pathname !== '/favicon.ico'){
            fs.readFile(`./static${pathname}`, (err, data) => {
                if(err){
                    console.log('404');
                    res.writeHead(404, {"Content-Type": "text/html; charset='utf-8'"});
                    res.write(`<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head>`)
                    res.end('这个页面不存在 404！');
    
                }
                res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});
    
                res.end(data);
            })
        }
    
    
    });
    
    server.listen(3000, () => {
        console.log("服务启动成功：http://localhost:3000");
    })
```

- 2、web服务器优化
```js
    // 10 利用HTTP模块 URl模块 Path模块 Fs模块创建一个静态WEB服务器(上)
    const http = require('http');
    const fs = require('fs');
    const path = require('path');
    const common = require('./module/common');
    const url = require('url');
    
    
    const server = http.createServer((req, res) => {
        // http://127.0.0.1:8080/login.html
        // http://127.0.0.1:8080/index.html
    
        // 1、获取地址
        console.log(req.url);
        let pathname = url.parse(req.url).pathname;
    
        console.log('pathname 路径名字：', pathname)
    
        pathname = pathname === '/' ? `/index.html` : pathname;
    
        // 可以获取后缀名 path.extname();
        let extname = path.extname(pathname);
    
    
        // 2、通过 fs 模块读取文件
        if(pathname !== '/favicon.ico'){
            fs.readFile(`./static${pathname}`, (err, data) => {
                if(err){
                    console.log('404');
                    res.writeHead(404, {"Content-Type": "text/html; charset='utf-8'"});
                    res.write(`<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head>`)
                    res.end('这个页面不存在 404！');
    
                }
    
                // 把 extname 后缀名，传到到 getMime 里面去
                let mime = common.getMime(extname);
    
                res.writeHead(200, {'Content-Type': `${mime}; charset='utf-8'`});
    
                res.end(data);
            })
        }
    
    
    });
    
    server.listen(3000, () => {
        console.log("服务启动成功：http://localhost:3000");
    })
```