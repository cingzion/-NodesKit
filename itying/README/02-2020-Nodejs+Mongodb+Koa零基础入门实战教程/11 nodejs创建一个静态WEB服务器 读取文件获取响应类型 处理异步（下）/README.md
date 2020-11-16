## 11 nodejs创建一个静态WEB服务器 读取文件获取响应类型 处理异步（下）

- 01、async-await实现
```jsx harmony
    // 10 利用HTTP模块 URl模块 Path模块 Fs模块创建一个静态WEB服务器(上)
    const http = require('http');
    const fs = require('fs');
    const path = require('path');
    const url = require('url');
    const common = require('./module/common');
    
    // common.getFileMime('.png');
    
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
            fs.readFile(`./static${pathname}`, async (err, data) => {
                if(err){
                    console.log('404');
                    res.writeHead(404, {"Content-Type": "text/html; charset='utf-8'"});
                    res.write(`<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head>`)
                    res.end('这个页面不存在 404！');
    
                }
    
                // 把 extname 后缀名，传到到 getMime 里面去
                let mime = await common.getFileMime(extname);
    
                res.writeHead(200, {'Content-Type': `${mime}; charset='utf-8'`});
    
                res.end(data);
            })
        }
    
    
    });
    
    server.listen(3000, () => {
        console.log("服务启动成功：http://localhost:3000");
    })
```

- 使用不同的方法实现
```jsx harmony
    const fs = require('fs');
    
    exports.getMime = (extname) => {
        switch (extname) {
            case '.html':
                return 'text/html';
            case '.css':
                return 'text/css';
            case '.js':
                return 'text/javascript';
            default:
                return 'text/html';
        }
    }
    
    
    exports.getFileMime = (extname) => {
        // 同步-读取文件
        /*fs.readFile('./data/mime.json', (err, data) => {
            if (err) {
                console.log('读取错误：', err);
            }
            let mime = JSON.parse(data.toString());
    
            console.log('读取数据成功：', mime[extname])
        });*/
    
        // 异步-使用 Promise 读取文件
        /*return new Promise((resolve, reject) => {
            fs.readFile('./data/mime.json', (err, data) => {
                if (err) {
                    console.log('读取错误：', err);
                    reject(err);
                    return;
                }
                let mime = JSON.parse(data.toString());
                console.log('读取数据成功：', mime[extname]);
                resolve(mime[extname]);
            })
        });*/
    
        // 使用同步读取的方法
        const data = fs.readFileSync('./data/mime.json'); // 同步方法
        let mime = JSON.parse(data.toString());
        console.log('读取数据成功：', mime[extname]);
        return mime[extname];
    }
```