const express = require('express'),
      morgan = require('morgan'),
      compress = require('compression'),
      webpackConfig = require('./webpack');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'sandbox' || process.env.NODE_ENV === 'local') {

        console.log("Running in development mode!");
        
        //load logger
        app.use(morgan('dev'));

        //load webpack from config (with hot loading)
        webpackConfig.webpackDevMiddleware(app);

    } else if (process.env.NODE_ENV === 'production') {

        console.log("Running in production mode!");
        app.use(compress());

    } else if (process.env.NODE_ENV === 'staging') {

        console.log("Running in staging mode!");
        app.use(compress());
    }

    app.use(express.static('./public'));

    app.set('view engine', 'html');

    app.get('/', function(req, res) {
        res.sendFile('index.html');
    });

    return app;
};
