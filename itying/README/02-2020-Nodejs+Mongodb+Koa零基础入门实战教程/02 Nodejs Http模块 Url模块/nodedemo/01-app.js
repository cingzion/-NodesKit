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