'use strict';
module.exports = function(app) {
  var dragon = require('../controllers/dragonController');


  // Dragon Routes
  app.route('/lobbies')
    .get(dragon.list_all_lobbies)
    .post(dragon.create_a_lobby);


  app.route('/lobbies/:lobbyId')
    .get(dragon.get_lobby_info)
    .put(dragon.update_a_lobby)
    .delete(dragon.delete_a_lobby);
};
