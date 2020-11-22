/**
 * 最终目标是以这样的方式配置路由
 *
 * app.get('/', (req, res) => {
 *     res.end('hello world');
 * })
 */


const app = () => {
    console.log('调用 app 方法');
};

app.get = () => {
    console.log('get 方法');
};

app.post = () => {
    console.log('post 方法');
};

// 调用
app.get();
app();