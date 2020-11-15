// 普通的方法
{
    const text = () => {
        return '你好NodeJS！'
    }

    console.log(text())
}

// 变成 异步 的方法
/*{
    const text = async () => {
        return '异步的方法，你好NodeJS！'
    }
    console.log(await text()); // 错误： await 必须得用在 async 的方法里面

}*/
{
    const test = async () => { // Promise { '异步的方法，你好NodeJS！' }
        return '异步的方法，你好NodeJS！'
    };

    const main = async () => {
        let data =  await test();
        console.log(data)
    };

    main(); // 异步的方法，你好NodeJS！

}

// 封装一个异步方法
{
    const test = async () => {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               const name = '张三 222';
               resolve(name);
           }, 1000);
        });
    };

    const main = async () => {
        let data = await test(); // 获取异步方法里面的数据
        console.log(data);
    };
    main(); // 张三 222
}


