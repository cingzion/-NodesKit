const http = require('http');   // 引入 http 模块
const url = require('url');     // 引入 url 模块
// 第一种引入的方法
// const axios = require('./node_modules/axios/index');

// 第二种引入的方法
/*
const axios = require('axios/index');
axios.get();
axios.post();
*/

// 第三种引入的方法
const axios = require('axios');
axios.get();
axios.post();
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

    res.write("你好 NodeJS！!!!");

    res.write(`<h2>你好 NodeJS！</h2>`);

    res.end(); // 结束响应
});

server.listen(3000, () => {
    console.log(`服务启动成功：http://localhost:3000`);
})


