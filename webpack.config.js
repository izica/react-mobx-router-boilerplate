var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/react/App.jsx',
        './src/scss/app.scss',
    ],
    output: {
        filename: './assets/js/bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-1'
                    ],
                    plugins: [
                        'react-hot-loader/babel',
                        'transform-decorators-legacy',
                        'transform-class-properties'
                    ]
                }
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-raw-loader!postcss-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, 'src', 'scss')]
                },
                postcss: [
                    require('precss'),
                    require('autoprefixer')
                ],
                context: '/',
                output: {
                    path: './assets/css/styles.css'
                }
            }
        })
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
        inline: true,
        contentBase: './',
    }
};
