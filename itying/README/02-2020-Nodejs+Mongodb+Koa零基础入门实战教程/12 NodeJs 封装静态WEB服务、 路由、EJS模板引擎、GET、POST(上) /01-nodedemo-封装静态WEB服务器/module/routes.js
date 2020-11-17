const fs = require('fs');
const path = require('path');
const url = require('url');

// 私有方法
const getFileMime = (extname) => {
    const data = fs.readFileSync('./data/mime.json');  // 同步方法
    const mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}

exports.static = (req, res, staticPath ) => {
    // 1、获取url地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname === '/' ? `/index.html` : pathname;
    const extname = path.extname(pathname); // 可以获取后缀名 path.extname();

    // 2、通过 fs 模块读取文件
    if(pathname !== '/favicon.ico'){
        fs.readFile(`./${staticPath}${pathname}`, async (err, data) => {
            if(err){
                res.writeHead(404, {"Content-Type": "text/html; charset='utf-8'"});
                res.write(`<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head>`)
                res.end('这个页面不存在 404！');
            }

            let mime = await getFileMime(extname); // 把 extname 后缀名，传到到 getMime 里面去
            res.writeHead(200, {'Content-Type': `${mime}; charset='utf-8'`});
            res.end(data);
        })
    }
}