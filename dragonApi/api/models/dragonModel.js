'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LobbySchema = new Schema({
  id: String
});

module.exports = mongoose.model('Lobbies', LobbySchema);
