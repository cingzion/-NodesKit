// 10 利用HTTP模块 URl模块 Path模块 Fs模块创建一个静态WEB服务器(上)
const http = require('http');
const url = require('url');


const routes = require('./module/routes');
const server = http.createServer((req, res) => {
    // 创建静态 web 服务
    routes.static(req, res, 'static');

    // 路由
    let pathname = url.parse(req.url).pathname;
    if (pathname === '/login'){
        res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});
        res.write(`<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head>`)
        res.end('执行登陆');
    }else if(pathname === '/register'){
        res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});
        res.write(`<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head>`)
        res.end('执行注册');
    }else if(pathname === '/admin'){
        res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});
        res.write(`<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head>`)
        res.end('处理后的业务逻辑');
    }else{
        res.writeHead(404, {"Content-Type": "text/html; charset='utf-8'"});
        res.write(`<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head>`)
        res.end('页面不存在');
    }

});

server.listen(3000, () => {
    console.log("服务启动成功：http://localhost:3000");
})