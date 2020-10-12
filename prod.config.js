/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-10-12 10:33:28
 * @LastEditors: pdc
 * @LastEditTime: 2020-10-12 11:21:24
 */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
// 代码压缩
const TerserPlugin = require("terser-webpack-plugin");


// * 公共代码抽离
const optimization = {
  splitChunks: {
    cacheGroups: {
      vendors: {
        name: "chunk-vendors",
        test: /[\\/]node_modules[\\/]/,
        priority: 100,
        chunks: "all",
        minChunks: 1,
        maxInitialRequests: 5,
        minSize: 0,
      },
      common: {
        name: "chunk-common",
        test: /[\\/]src[\\/]ts[\\/]/,
        minChunks: 2,
        maxInitialRequests: 5,
        minSize: 0,
        priority: 60,
        chunks: "all",
        reuseExistingChunk: true,
      },
      styles: {
        name: "styles",
        test: /\.(sa|sc|c)ss$/,
        chunks: "all",
        enforce: true,
      },
      runtimeChunk: {
        name: "manifest",
      },
    },
  },
};

// * 资源配置
const cdn = {
  dev: {},
  build: {
    css: [],
    js: [],
  },
};
//打包输出文件名
const outputDir = "dist";
// 打包后应用路径
const ossCDN = `/${outputDir}/`;

// * 设置别名
const aliasConfig = (config) => {
  config.resolve.alias

    .set("@", resolve("src"))

    .set("@assets", resolve("src/assets"))

    .set("@styles", resolve("src/assets/styles"))

    .set("@components", resolve("src/components"))

    .set("@plugins", resolve("src/plugins"))

    .set("@views", resolve("src/views"))

    .set("@router", resolve("src/router"))

    .set("@store", resolve("src/store"))

};


// * 代码压缩
const codeUglify = (config) => {
  config.plugins.push(
    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log']
        }
      }
    })
  )
};

module.exports = {
  outputDir,
  aliasConfig,
  codeUglify,
  optimization,
  cdn,
  ossCDN,
};
