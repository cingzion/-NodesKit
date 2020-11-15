// TODO: 1、let const 模板字符串

{
    /**
     * 1、let const 的使用
     *    let 和 var 是一样的用来定变量
     */
    // let 是一个块作用域
    let a = 123;
    if(true){
        let a = 123;
    }
    console.log("打印的结果是：",a); // 打印的结果是： 123


    // 常量
    const PI = 3.1415926;
    // PI = 3; 不允许重新赋值
    console.log('打印的结果是: ',PI); // 打印的结果是:  3.1415926

    // 模板字符串
        // ES5 的写法
        var name = '张三';
        var age = 20;
        console.log('打印的结果是: ',name + '的年龄是' + age); // 打印的结果是:  张三的年龄是20


        // 方法的简写，属性的简写
            // 属性的简写
            {
                var app = {
                    name: name,
                };
                console.log('打印的结果是: ', app.name); // 打印的结果是:  张三
            }


            // 方法的简写
            {
                var app = {
                    name,
                    run(print){
                        console.log(print, `${this.name}在跑步！`);
                    }
                };
                app.run('打印的结果是: '); // 打印的结果是:  张三在跑步！
            }


}
// TODO: 2、箭头函数   this指向上下文
{
    setTimeout(function() {
        console.log('打印的结果是: ES5执行');
    }, 1000);   // 打印的结果是: ES5执行

    setTimeout(() => {
        console.log('打印的结果是: ES6执行');
    }, 1000);   // 打印的结果是: ES6执行
}
// TODO: 3、回调函数 获取异步方法里面的数据
{
    function getData(callback) {
        // Ajax
        setTimeout(() => {
            var name = '张三';
            callback(name);
        })
    }

    // 外部获取异步方法里面的数据
    getData((data) => {
        console.log("输出的结果是：", data);
    });
    // 输出的结果是： 张三


}
// TODO: 4、Promise 来处理异步， resolve 成功的回调函数，reject 失败的回调函数
{
    let p = new Promise((resolve, reject) => {
       // Ajax
       setTimeout(() => {
           const name = "我是张三";
           if(Math.random() < 0.7) {
               resolve(name);
           }else{
               reject('失败');
           }
       }, 1000);
    });

    p.then(data => {
        console.log("输出的成功结果是：", data); // 输出的成功结果是： 我是张三
    }).catch(e => {
        console.log("输出的失败结果是：", e);    // 输出的失败结果是： 失败
    })
}
// TODO: 5、获取异步方法里面的数据
{
    const getData = (resolve, reject) => {
        // Ajax
        setTimeout(() => {
            let name = "我是王五";
            resolve(name);
        }, 1000);
    };

    const p = new Promise(getData);
    p.then(data => {
        console.log('打印的结果是：', data);
    }); // 打印的结果是： 我是王五
}
// 上在的等同于下面的
{
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let name = '赵六';
            resolve(name);

        }, 1000);
    });
    p.then(data => {
        console.log('打印的结果是：', data);
    }); // 打印的结果是： 赵六
}
// 封装 Promise
{
    const getData = (resolve, reject) => {
        setTimeout(() => {
            let name = "Jean";
            resolve(name);
        } ,1000);
    };

    const p = new Promise(getData);

    p.then(res => {
        console.log('打印的结果是：', res);
    }); // 打印的结果是： Jean
}