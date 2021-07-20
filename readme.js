/* 

 微前端：就是将不同的功能按照不同的维度拆分成多个子应用，通过主应用来加载
        这些子应用，微前段核心在于拆，拆完后在合

 微前段解决的问题：
       - 不同团队「技术栈不同」同时开发一个应用    
       - 每个团队开发的模块可以独立开发 独立部署
       - 实现增量迁移，整合新的和旧的项目 不更改旧项目 增添新的功能
  
 如何实现微前段：
       - 将一个应用划分成多个子应用，将子应用打包成一个个模块，当路径切换
         切换时加载不同的子应用，这样每个子应用都是独立的额，技术栈也不用做
         限制了，解决协同开发问题。
       - 子应用需要暴露固定的钩子函数 「接入协议 插排 三口 两口」
            bootstrap 启动的时候
            mount 挂载的时候
            unmount 卸载的时候
       - 方案： 
         + iframe，webComponent
         + 2018 诞生 Single-SPA「system.js」用于前端微服务化的javascript解决方案
         「本身没有处理样式隔离，js执行隔离」实现了路由劫持和应用加载
         + 2019 qiankun「import-html」基于 Single-SPA 提供开箱即用的api 接入简单     
         + 2020 EMP基于moudle Federation 接入成本低 解决第三方依赖包的问题   

       
 Symtem.js：通用的模块加载器，能在浏览器上动态加载模块，微前段的核心就是加载微应用，我们
         将应用打包成模块，在浏览器中通过System.js来加载模块
              

 环境搭建：
    npm init -y 
    cnpm i 
      webpack 
      webpack-cli
      webpack-dev-server 
      babel-loader 
      @babel/core 
      @babel/preset-env 
      @babel/preset-react 
      html-webpack-plugin
      react
      react-dom
    -D        



*/