var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['react-hot-loader/patch','webpack-hot-middleware/client','./src/index.js'],
    output: {
        path: path.join( __dirname, 'public', 'js', 'build'),
        publicPath: '/js/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    devTool: 'cheap-module-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
