const webpack = require('webpack'),
      webpackConfig = require('../webpack.config.dev.js'),
      compiler = webpack(webpackConfig);

exports.webpackDevMiddleware = function (app){
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        colors: true,
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));

    return app;
};
