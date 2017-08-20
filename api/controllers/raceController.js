'use strict';
var mongoose = require('mongoose'),
  Race = mongoose.model('Races');

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