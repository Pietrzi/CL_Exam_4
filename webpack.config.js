const path = require("path");
const entryFile = "task03.js";

module.exports = {
    entry: `./js/${entryFile}`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build")
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true
    },
    watch: true,
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                  }
            }
        ]
    }
};
