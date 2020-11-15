/**
 * - 1、https://www.npmjs.com/package/mkdirp
 * - 2、cnpm i mkdirp --save / yarn add mkdir
 * - 3、const mkdirp = require('mkdirp'');
 * - 4、看文档使用
 */
const mkdirp = require('mkdirp');
/*mkdirp('./upload', (err) => {
    if(err) {
        console.error('创建失败：',err);
    }
});*/

// 生成一级目录
/*const made = mkdirp.sync('./upload');
console.log(made)*/

// 生成多级目录
const made = mkdirp.sync('./upload/aaa/xxx');
console.log(made)

