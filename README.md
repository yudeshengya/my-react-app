# my-react-app
> 基于 Webpack 的 React 脚手架模板
## 功能特点
+ DllPlugin 使用动态链接库引入第三方模块，提升打包速度
+ thread-loader 多进程构建，提升打包速度
+ 支持 less、支持 css 压缩单独打包为文件
+ 开启 babel-loader 缓存，提升二次打包速度
+ webpack4默认功能：terser-webpack-plugin 多进程并行压缩 js 文件；tree-shaking；scope hosting 作用域提升

## 项目目录

```
my-react-app
├── README.md
├── node_modules
├── .eslintrc.js eslint 配置文件
├── .babelrc babel 配置文件
├── package.json
├── .gitignore 
├── public 公共资源文件
├── build 配置文件
└── src  项目源码
    ├── api 存放接口调用方法
    ├── assets 存放资源
    ├── components 存放公共组件
    ├── pages 存放页面级组件
    ├── store 存放 Redux 配置
    ├── utils 存放公用方法
    └── pages 存放页面级组件
```

## 使用步骤

1. 克隆本仓库到本地

   ```
   git clone https://github.com.cnpmjs.org/yudeshengya/my-react-app.git
   ```

2. 安装依赖

   ```
   npm install
   ```

3. 修改远程仓库链接

   ```
   git remote set-url origin 你的仓库地址
   ```

4. 根据自身需要修改 `package.json` 和 `webpack.dll.js` 配置信息

5. 开始搭建自己的项目

   ```
   // 打包第三方库文件生成 manifest.json 
   npm run dll
   // 开发环境
   npm run start
   // 生产环境
   npm run build
   ```

## 注意事项

该项目默认配置功能，即 /build/webpack.dll.js 下配置信息

```js
['react', 'react-dom', 'redux', 'redux-thunk', 'axios', 'react-redux', 'styled-components', 'immer', 'react-router-dom']
```

可根据自己需要增减