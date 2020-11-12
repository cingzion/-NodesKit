// url 模块
const url = require('url');

const api = "http://www.baidu.com?name=zhangsan&age=20";
const urlParse = url.parse(api, true);
console.log("输出结果如下：", urlParse);
/*
输出结果如下： Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?name=zhangsan&age=20',
  query: [Object: null prototype] { name: 'zhangsan', age: '20' },
  pathname: '/',
  path: '/?name=zhangsan&age=20',
  href: 'http://www.baidu.com/?name=zhangsan&age=20'
}
 */

// const getValue = url.parse(api, true).query;
const { query } = url.parse(api, true);
const { name, age} = query;
console.log("输出结果如下: ",query)
/*
    输出结果如下:  [Object: null prototype] { name: 'zhangsan', age: '20' }
 */
console.log(`姓名：${name}; 年龄：${age}`) // 姓名：zhangsan; 年龄：20

