## 三、Nodejs 自启动工具 supervisor & nodemon
> supervisor & nodemon会不停的 watch 你应用下面的所有文件，发现有文件被修改，就重新载入程序文件这样就实现了部署，修
  改了程序文件后马上就能看到变更后的结果。麻麻再也不用担心我的重启 nodejs 了!

- 安装 nodemon 
    + `sudo npm install -g nodemon`

- 安装 supervisor
    + `sudo npm install -g supervisor`
    
- 使用方法
    + supervisor app.js
    + nodemon app.js
    
    
## supervisor 使用文档
```jsx harmony
        
    1、安装了nodejs就会有npm 。
    
    
    2、supervisor修改代码后可以自动重启web服务
    
    
    3、安装cnpm （推荐）
        
    
        http://npm.taobao.org/
    
        npm install -g cnpm --registry=https://registry.npm.taobao.org
    
    
    
    4、安装supervisor
    
    
     npm -g install supervisor  或者   cnpm -g install supervisor   （只需要安装一次）
    
    
    5、运行代码
    
    
     supervisor app.js


```
    