'use strict';
var mongoose = require('mongoose'),
  Users = mongoose.model('Users');
  
// User Functions
exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if(err)
      res.send(err);

    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.username = req.body.username;
  new_user.deviceId = req.body.deviceId;
  new_user.races = [];

  new_user.save(function(err, user) {
    if (err)
      res.send(err);

    res.json(user);
  });
};

exports.get_user_info = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    
    user.username = req.body.username;
    //TODO: user.races += req.body.race;

    user.save(function(err) {
      if (err)
        res.send(err);

      res.json({message: 'User updated'});
    });
  });
};

exports.delete_a_user = function(req, res) {
  User.remove({_id: req.params.userId}, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};