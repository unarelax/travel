const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

// 配置路径别名
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("styles", resolve("src/assets/styles"))
      .set("common", resolve("src/common"))
  }
};

//webpack-dev-serve 请求转发
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    }
  }
};
