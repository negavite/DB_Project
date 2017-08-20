'use strict';
var mongoose = require('mongoose'),
  Lobby = mongoose.model('Lobbies');

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
    lobby.numBoats = req.body.numBoats;

    lobby.save(function(err) {
      if (err)
        res.send(err);

      res.json({message: 'Lobby updated'});
    });
  });
};

exports.join_a_lobby = function(req, res) {
  Lobby.findById(req.params.lobbyId, function(err, lobby) {
    if (err)
      res.send(err);
    
    if(lobby.passwordProtected){
      if(lobby.password.equals(req.body.password)){
        var newPaddler = {username: req.body.username, ready: false};
        lobby.paddlers.push(newPaddler);
      }
      else{
        res.json({message: 'Cannot join lobby.  Incorrect password.'});
      }
    }

    lobby.save(function(err) {
      if (err)
        res.send(err);

      res.json({message: 'Successfully joined lobby.'});
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