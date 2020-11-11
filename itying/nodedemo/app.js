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