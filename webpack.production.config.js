var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var settings = {
	plugins: [
	    new ExtractTextPlugin('./assets/css/styles.css', {
	        allChunks: true
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	    	minimize: true,
	    	warnings: false,
	    	mangle: {
	        	except: ['$super', '$', 'exports', 'require']
		    }
		}),
	    new webpack.optimize.DedupePlugin(),
	    new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
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
                loader: ExtractTextPlugin.extract('style-loader', 'css-raw-loader!autoprefixer!sass-loader')
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
