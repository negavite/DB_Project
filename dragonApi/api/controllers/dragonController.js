'use strict';
var mongoose = require('mongoose'),
  Lobby = mongoose.model('Lobbies'),
  User = mongoose.model('Users'),
  Result = mongoose.model('Results');


// Lobby functions
exports.list_all_lobbies = function(req, res) {
  Lobby.find({}, function(err, lobby) {
    if(err)
      res.send(err);
    res.json(lobby);
  });
};

exports.create_a_lobby = function(req, res) {
  var new_lobby = new Lobby(req.body);
  new_lobby.save(function(err, lobby) {
    if (err)
      res.send(err);
    res.json(lobby);
  });
};


exports.get_lobby_info = function(req, res) {
  Lobby.findById(req.params.lobbyId, function(err, lobby) {
    if (err)
      res.send(err);
    res.json(lobby);
  });
};


exports.update_a_lobby = function(req, res) {
  Lobby.findOneAndUpdate({_id: req.params.lobbyId}, req.body, {new: true}, function(err, lobby) {
    if (err)
      res.send(err);
    res.json(lobby);
  });
};


exports.delete_a_lobby = function(req, res) {
  Lobby.remove({_id: req.params.lobbyId}, function(err, lobby) {
    if (err)
      res.send(err);
    res.json({ message: 'Lobby successfully deleted' });
  });
};

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
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
  User.remove({_id: req.params.userId}, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

// Result Functions
exports.list_all_results = function(req, res) {
  Result.find({}, function(err, result) {
    if(err)
      res.send(err);
    res.json(result);
  });
};

exports.create_a_result = function(req, res) {
  var new_result = new Result(req.body);
  new_result.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};


exports.get_result_info = function(req, res) {
  Result.findById(req.params.resultId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};


exports.update_a_result = function(req, res) {
  Result.findOneAndUpdate({_id: req.params.resultId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};


exports.delete_a_result = function(req, res) {
  Result.remove({_id: req.params.resultId}, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'Result successfully deleted' });
  });
};