var path = require("path");

module.exports = {
    entry: "./index.js",
    context: path.resolve(__dirname, "src"),
    devtool: "cheap-module-source-map",
    output: {
        filename: "TrafficSerialize.js",
        path: path.resolve(__dirname, "build"),
        library: "TrafficSerialize",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
		loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /src.+\.js$/,
                exclude: /node_modules/,
                use: ["istanbul-instrumenter-loader", "babel-loader"]
            }
		]
	},
	resolve: {
		extensions: [".js", ".json"]
	}
};