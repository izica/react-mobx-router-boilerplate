var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        bundle: "./src/react/App.jsx"
    },
    output: {
        filename: "./assets/js/bundle.js"
    },
    module: {
        loaders: [
            {
				exclude: /node_modules/,
                test: /\.js|jsx$/,
                loader: "babel-loader",
                query: {
					presets: [
						"react",
					    "es2015",
						"stage-1"
                	],
                    plugins: [
                        "transform-decorators-legacy",
						"transform-class-properties"
                    ]
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};
