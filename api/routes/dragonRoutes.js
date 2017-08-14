'use strict';
module.exports = function(app) {
  var dragon = require('../controllers/dragonController');

  // Dragon API Routes
  app.route('/lobbies')
    .get(dragon.list_all_lobbies)
    .post(dragon.create_a_lobby);

  app.route('/lobbies/:lobbyId')
    .get(dragon.get_lobby_info)
    .put(dragon.update_a_lobby)
    .delete(dragon.delete_a_lobby);

  app.route('/joinLobby/:lobbyId')
    .put(dragon.join_a_lobby);    

  app.route('/users')
    .get(dragon.list_all_users)
    .post(dragon.create_a_user);

  app.route('/users/:userId')
    .get(dragon.get_user_info)
    .put(dragon.update_a_user)
    .delete(dragon.delete_a_user);

  app.route('/results')
    .get(dragon.list_all_results)
    .post(dragon.create_a_result);

  app.route('/results/:resultId')
    .get(dragon.get_result_info)
    .delete(dragon.delete_a_result);

  app.route('/races')
    .get(dragon.list_all_races)
    .post(dragon.create_a_race);

  app.route('/races/:raceId')
    .get(dragon.get_race_info)
    .put(dragon.update_a_race)
    .delete(dragon.delete_a_race);    
};
