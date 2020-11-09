// 1、表示引入 http 模块
const http = require('http');

// 2、创建服务器
/**
 * request  表示获取 url 传过来的信息
 * response 表示给浏览器响应信息
 */
const server = http.createServer((request, response) => {
    // 设置响应头
    response.writeHead(200, {'Content-type': 'text/plain'});
    // 表示给我们页面上输出一句话并且结束响应
    response.end("hello world node");
});

// 8080 端口号
server.listen(8080, () => {
    console.log(`NodeJS 服务启动成功：http://localhost:8080`)
})
// 这不是一个 NodeJS 程序
console.log("Hello NodeJS!"); // Hello NodeJS!




