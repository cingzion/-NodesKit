const fs = require('fs');
const path = require('path');
const url = require('url');
const ejs = require('ejs');


// 私有方法
const getFileMime = (extname) => {
    const data = fs.readFile('./data/mime.json');  // 同步方法
    const mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}

exports.static = (req, res, staticPath ) => {

}

let app = {
    static: (req, res, staticPath) => {
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
    },
    login: (req, res) => {
        // 处理登录的业务逻辑
        ejs.renderFile('./views/form.ejs', {}, (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
            res.end(data);
        })
        res.end('login')
    },
    news: (req, res) => {
        // news
        res.end('news')
    },
    doLogin: (req, res) => {
        //获取post传值
        let postData = '';
        req.on('data',(chunk)=>{
            postData+=chunk;
        })
        req.on('end',()=>{
            console.log(postData);
            res.end(postData);
        })
    },
    error: (req, res) => {
        //
        res.end('error')
    }
}



// app.login('req', 'res');
// app['login']('req', 'res');

module.exports = app;