// 引入一个 http 模块
const http = require('http');


/**
 *  req 表求获取客户端传过来的信息
 *  res 给浏览器响应信息
 */
const server = http.createServer((req, res) => {
    // 获取 url
    const { url } = req;

    //  设置响应头
    /**
     * 状态码是 200，文件类型是 html，字符集是 utf-8
     */
    res.writeHead(200, {"Content-type": "text/html;charset='utf-8'"});

    // 给页面上输入内容
    // 解决浏览器上输出的中文内容是乱码问题
    res.write(`<head><meta charset="UTF-8"></head>`); // 解决乱码
    res.write('你好 is nodejs');
    res.write(`<h2>你好 NodeJS！</h2>`);

    // 结束响应
    res.end();
});

server.listen(3000, () => {
    console.log(`Node 服务器启动成功：http://localhost:3000`)
});

