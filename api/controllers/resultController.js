'use strict';
var mongoose = require('mongoose'),
  Result = mongoose.model('Results');

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