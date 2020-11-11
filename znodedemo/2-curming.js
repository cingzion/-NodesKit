// 函数柯里化，通用的柯里化函数


// 柯里化也是一个高阶函数
/**
 * 1、typeof(它是什么类型不能区分对象)，
 * 2、constructor(判断构造函数)，
 * 3、instainceof
 * 4、Object.prototype.toString.call
 */

// 判断元素的类型

function isType(typing){ // 内置参数的功能
    return function(val){
        return Object.prototype.toString.call(val) === `[object ${typing}]`;
    }
}

// 主方法更具体一些 isNumber isString
let utils = {};
['String', 'Number', 'Boolean'].forEach(method => {
    utils[`is`+method] = isType(method);
});

console.log(utils.isString(123));
console.log(utils.isNumber(123));


