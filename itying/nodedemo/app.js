const http = require('http');
const app = require('./module/route');

// 注册 WEB 服务
http.createServer(app).listen(3000, () =>{
    console.log('服务启动成功：http://localhost:3000');
});



// 配置路由
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': `text/html; charset=utf-8`});
    res.end('首页');
});

// 配置路由
app.get('/login', (req, res) => {
    res.writeHead(200, {'Content-Type': `text/html; charset=utf-8`});
    res.end('执行登陆操作');
});

// 配置路由
app.get('/news', (req, res) => {
    res.writeHead(200, {'Content-Type': `text/html; charset=utf-8`});
    res.write(``)
    res.end('新闻页面');
});


