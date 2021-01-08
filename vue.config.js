const path = require("path")
const resolve = dir => {
  return path.join(__dirname, dir)
}
// 是否是产品模式
const isProd = ["production", "prod"].includes(process.env.NODE_ENV)
module.exports = {
  publicPath: "./",
  // 开启eslint校验
  lintOnSave: process.env.NODE_ENV !== "production",
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    open: isProd,
    host: "0.0.0.0",
    port: "8088"
    // 代理
    // proxyTable: {
    //   // proxy all requests starting with /api to jsonplaceholder
    //   '/': {
    //     target: 'http://47.99.141.16:8001/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // },
  },
  /* 
    chainWebPack会接收一个基于 webpack-chain 的 ChainableConfig 实例。
    允许对内部的 webpack 配置进行更细粒度的修改 
	*/
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
      .set("views", resolve("src/views"))
  },
  // 优化
  configureWebpack: {
    performance: {
      hints: "warning",
      maxAssetSize: 524288,
      maxEntrypointSize: 524288
    }
  },
  /*
		生产环境是否生成 sourceMap 文件
	*/
  productionSourceMap: false
}
