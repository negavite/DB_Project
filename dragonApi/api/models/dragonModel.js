'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LobbySchema = new Schema({
  id: String,
  distance: Number,
  paddlers: [{username: String, boat: Number, ready: Boolean}]
});

module.exports = mongoose.model('Lobbies', LobbySchema);
