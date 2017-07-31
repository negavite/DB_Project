'use strict';
var mongoose = require('mongoose'),
  Lobby = mongoose.model('Lobbies');


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
