var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var settings = {
	plugins: [
	    new ExtractTextPlugin('./assets/css/styles.css', {
	        allChunks: true
	    })
	],
	module: ["es2015", "react"]
}

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
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                   presets: settings.module
                }
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-raw-loader!autoprefixer-loader!sass-loader')
            }
        ]
    },
    plugins: settings.plugins,
    sassLoader: {
        includePaths: ['src/scss']
    },
    devServer: {
        historyApiFallback: true
    }
};
