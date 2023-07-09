const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./plants/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name][ext]",
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"./plants/index.html"
        }),
        new CopyPlugin({
            patterns: [
              {from: "./plants/images"}
       ] })
],
module:{
    rules:[
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
            test:/\.(jpe?g|png|svg|gif)$/,
            type: "asset/resource",
        },
        {
            test: /\.s[ac]ss$/i,
            use:["style-loader","css-loader","sass-loader"],
        }
    ]
}
}