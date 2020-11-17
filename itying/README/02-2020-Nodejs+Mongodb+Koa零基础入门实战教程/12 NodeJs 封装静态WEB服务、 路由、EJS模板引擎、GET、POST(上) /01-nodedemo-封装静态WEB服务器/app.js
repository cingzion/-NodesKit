// 10 利用HTTP模块 URl模块 Path模块 Fs模块创建一个静态WEB服务器(上)
const http = require('http');
const routes = require('./module/routes');
const server = http.createServer((req, res) => {
    // 创建静态 web 服务
    routes.static(req, res, 'static');
});

server.listen(3000, () => {
    console.log("服务启动成功：http://localhost:3000");
})