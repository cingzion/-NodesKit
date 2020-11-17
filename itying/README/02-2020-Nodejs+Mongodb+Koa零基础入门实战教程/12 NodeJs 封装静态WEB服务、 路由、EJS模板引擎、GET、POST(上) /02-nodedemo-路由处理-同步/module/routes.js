const fs = require('fs');
const path = require('path');
const url = require('url');


// 私有方法
const getFileMime = (extname) => {
    const data = fs.readFile('./data/mime.json');  // 同步方法
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
        try{
            const data = fs.readFileSync(`./${staticPath}${pathname}`);
            if (data){
                let mime = getFileMime(extname);
                res.writeHead(200, { "Content-Type": `${mime}; charset="utf-8"`});
                res.end(data);
            }
        } catch(e) {
            console.log(e)
        }

    }
}