'use strict';
var mongoose = require('mongoose'),
  Lobby = mongoose.model('Lobbies'),
  User = mongoose.model('Users'),
  Result = mongoose.model('Results'),
  Race = mongoose.model('Races');

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
  new_lobby.name = req.body.name;
  new_lobby.distance = req.body.distance;
  new_lobby.startFlag = false;
  new_lobby.paddlers = [];
  new_lobby.boats = 1;

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
  Lobby.findById(req.params.lobbyId, function(err, lobby) {
    if (err)
      res.send(err);
    
    lobby.name = req.body.name;
    lobby.distance = req.body.distance;
    lobby.startFlag = req.body.startFlag;
    //TODO: lobby.paddlers += req.body.paddler;
    lobby.boats = req.body.boats;
    lobby.save(function(err) {
      if (err)
        res.send(err);

      res.json({message: 'Lobby updated'});
    });
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
  new_result.lobbyName = req.body.lobbyName;
  new_result.distance = req.body.distance;
  new_result.paddlers = req.body.paddlers;
  new_result.results = req.body.results;
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

exports.delete_a_result = function(req, res) {
  Result.remove({_id: req.params.resultId}, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'Result successfully deleted' });
  });
};

// Race Functions
exports.list_all_races = function(req, res) {
  Race.find({}, function(err, race) {
    if(err)
      res.send(err);

    res.json(race);
  });
};

exports.create_a_race = function(req, res) {
  var new_race = new Race(req.body);
  new_race.raceData = [0];

  new_race.save(function(err, race) {
    if (err)
      res.send(err);

    res.json(race);
  });
};

exports.get_race_info = function(req, res) {
  Race.findById(req.params.raceId, function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};

exports.update_a_race = function(req, res) {
  Race.findById(req.params.raceId, function(err, race) {
    if (err)
      res.send(err);

    var newValue = race.raceData[req.body.boat] + parseInt(req.body.taps);
    race.raceData.set(req.body.boat, newValue);

    race.save(function(err, race) {
      if (err)
        res.send(err);

      res.json(race);
    });
  });
};

exports.delete_a_race = function(req, res) {
  Race.remove({_id: req.params.raceId}, function(err, race) {
    if (err)
      res.send(err);
    res.json({ message: 'Race successfully deleted' });
  });
};