let obj = {
    get(){
        console.log("从服务器获取数据");
    },
    post(){
        console.log("提交数据")
    }
};
// 暴露当前的模块
// 第一种方式：
// exports.obj= obj;
// 第二种方式：
module.exports = obj;