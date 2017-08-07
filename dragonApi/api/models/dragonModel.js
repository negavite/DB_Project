'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LobbySchema = new Schema({
  name: String,
  distance: Number,
  boats: Number,
  paddlers: [{username: String, boat: Number, ready: Boolean}],
  startFlag: Boolean
});

var UserSchema = new Schema({
  username: String,
  deviceId: String,
  friends: [Schema.Types.Mixed],
  races: [Schema.Types.Mixed]
});

var ResultSchema = new Schema({
  lobbyName: String,
  distance: Number,
  paddlers: [{username: String, boat: Number, ready: Boolean}],
  results: [{time: Number, boat: Number}]
});

module.exports = mongoose.model('Lobbies', LobbySchema);
module.exports = mongoose.model('Users', UserSchema);
module.exports = mongoose.model('Results', ResultSchema);