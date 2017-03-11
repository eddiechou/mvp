const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// From starter code
// var items = require('./db');

var bodyParser = require('body-parser');

const handler = require('./lib/request-handler');

const app = express();
const compiler = webpack(webpackConfig);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true, type: '*/x-www-form-urlencoded' }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));


// From starter code
app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// Serves everything in /www
app.use(express.static(__dirname + '/www'));

app.get('/user', handler.hello);

app.post('/promises', handler.insertPromise);
app.get('/promises', handler.getPromises);

app.post('/rejectPromise', handler.rejectPromise);
app.post('/acceptPromise', handler.acceptPromise);

app.get('/init', handler.initializePromisesTestData);



const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('PromiseKeeper listening at http://%s:%s', host, port);
});
