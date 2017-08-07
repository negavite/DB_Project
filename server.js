var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  model = require('./api/models/dragonModel'),
  bodyParser = require('body-parser');

var db_url = 'mongodb://DB_user:db_password@ds115712.mlab.com:15712/dragon_db';
mongoose.Promise = global.Promise;
mongoose.connect(db_url, function(err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', db_url);
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/dragonRoutes');
routes(app);

app.listen(port);

console.log('Dragon API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
