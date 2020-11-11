## 1-1-高阶函数
- 高阶函数
```js
    // 高阶函数 "有两个特点满足一个就是高阶函数"
    /**
     * 1、我们给一个函数传入一个函数，回调
     * 2、一个函数返回一个函数
     *
     */
    
    // 装饰器模式(对原本的功能进行包装)
    function core(a, b, c) {
        console.log('core。。。。。')
    }
    
    // 原型：每个类都有一个原型
    Function.prototype.before = function(beforeFn) {
        // this = core // this 的指向，就是看调用者，谁调用谁，this 就是谁
        return (...args) => { // 箭头函数中没有 this 没有 arguments 没有 prototype
            console.log(args)
            beforeFn();
            this(...args);
        }
    }
    
    let newFn = core.before(() => {
        console.log('core before')
    });
    
    newFn(1,2,3);
    
    // 闭包: 1、定义函数的作用域和调用的作用域不是同一个
```