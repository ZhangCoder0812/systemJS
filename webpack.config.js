
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 写成函数 可以传参数 这里的env是package.json中build命令中的env
module.exports = (env)=>{
    return {
        mode:"development",
        output:{
            filename:"index.js",
            path:path.resolve(__dirname,'dist'),
            libraryTarget: env.production ?'system':'' //打包的格式 system模块 生产环境下使用system.js打包 否则就默认
        },
        module:{
            rules:[
                {
                    test:/\.js$/,
                    use:{
                        loader:'babel-loader',
                    },
                    exclude:/node_modules/
                }
            ]
        },
        plugins:[
          !env.production &&  new HtmlWebpackPlugin({
                template:'./public/index.html'
            })
        ].filter(Boolean), // 过滤掉false
        // 公共模块cdn引用 生产环境下不打包 
        externals:env.production ? ['react','react-dom']:[]
    }
}