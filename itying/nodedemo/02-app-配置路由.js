/**
 * 最终目标是以这样的方式配置路由
 *
 * app.get('/', (req, res) => {
 *     res.end('hello world');
 * })
 */

const G = {};

const app = (req, res) => {
    console.log('调用 app 方法');

    if(G['/login']){
        G['/login'](req, res); // 执行方法
    }
};


// 注册方法
app.get = (str, cb) => {
    console.log('get 方法');
    // 注册方法
    G[str] = cb;

    /*
    G['/login'] = (req, res) => {
        res.end('hello world');
    }
    */
};

// 配置路由-调用
app.get('/login', (req, res) => {
    // res.end('Hello World!');
    console.log('执行 login 方法')
});

setTimeout(() => {
    app('req', 'res');
}, 1000)