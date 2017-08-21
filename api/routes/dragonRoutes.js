'use strict';
module.exports = function(app) {
  var lobbyController = require('../controllers/lobbyController'),
    userController = require('../controllers/userController'),
    resultController = require('../controllers/resultController'),
    raceController = require('../controllers/raceController');

  // API Routes
  app.route('/')
    .get(userController.get_user_info);

  app.route('/lobbies')
    .get(lobbyController.list_all_lobbies)
    .post(lobbyController.create_a_lobby);

  app.route('/lobbies/:lobbyId')
    .get(lobbyController.get_lobby_info)
    .put(lobbyController.update_a_lobby)
    .delete(lobbyController.delete_a_lobby);

  app.route('/joinLobby/:lobbyId')
    .put(lobbyController.join_a_lobby);
  
  app.route('/leaveLobby/:lobbyId')
    .put(lobbyController.leave_a_lobby);

  app.route('/users')
    .get(userController.list_all_users)
    .post(userController.create_a_user);

  app.route('/users/:userId')
    .get(userController.get_user_info)
    .put(userController.update_a_user)
    .delete(userController.delete_a_user);

  app.route('/results')
    .get(resultController.list_all_results)
    .post(resultController.create_a_result);

  app.route('/results/:resultId')
    .get(resultController.get_result_info)
    .delete(resultController.delete_a_result);

  app.route('/races')
    .get(raceController.list_all_races)
    .post(raceController.create_a_race);

  app.route('/races/:raceId')
    .get(raceController.get_race_info)
    .put(raceController.update_a_race)
    .delete(raceController.delete_a_race);    
};