/* eslint-disable @typescript-eslint/no-var-requires */
const pxtorem = require("postcss-pxtorem");
const prodConfig = require("./prod.config");

// 环境
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);



module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? prodConfig.ossCDN : "/",
  outputDir: prodConfig.outputDir,
  assetsDir: "static",
  lintOnSave: false,
  // 项目打包后，代码都是经过压缩加密的，如果运行时报错，
  // 输出的错误信息无法准确得知是哪里的代码报错。 有了map就可以像未加密的代码一样，
  // 准确的输出是哪一行哪一列有错。 正式环境 修改为false
  productionSourceMap: true,
  parallel: false, // ts-loader不支持多线程 ts下打包会丢失三方组件样式
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      },
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 192, //换算基数， 默认100  ，
            unitPrecision: 5, //允许REM单位增长到的十进制数字。
            propList: ['*'],
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /node_module/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ],
      },
    },
  },
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true);
    // 添加别名
    prodConfig.aliasConfig(config);
    // 移除prefetch和preload
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    return config;
  },
  configureWebpack: config => {

    if (IS_PROD) {
      // 代码压缩
      prodConfig.codeUglify(config);
    }
  }
}