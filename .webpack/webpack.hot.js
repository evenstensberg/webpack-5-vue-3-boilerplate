const {merge} = require("webpack-merge");
const devConfig = require("./webpack.client.dev");

module.exports = merge(devConfig, {
  devServer: {
    hot: true,
    open: true,
    port: 8090,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    open: true
  },
  output: {
    publicPath: "/"
  }
});
