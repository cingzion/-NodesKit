const fs = require('fs');

exports.getMime = (extname) => {
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
}


exports.getFileMime = (extname) => {
    // 同步-读取文件
    /*fs.readFile('./data/mime.json', (err, data) => {
        if (err) {
            console.log('读取错误：', err);
        }
        let mime = JSON.parse(data.toString());

        console.log('读取数据成功：', mime[extname])
    });*/

    // 异步-使用 Promise 读取文件
    return new Promise((resolve, reject) => {
        fs.readFile('./data/mime.json', (err, data) => {
            if (err) {
                console.log('读取错误：', err);
                reject(err);
                return;
            }
            let mime = JSON.parse(data.toString());
            console.log('读取数据成功：', mime[extname]);
            resolve(mime[extname]);
        })
    })

}