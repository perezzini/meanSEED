var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
/*
 * Require schema model(s) through Mongoose
 var Thing = mongoose.model('Thing');
 */

/* GET API. */
router.get('/', function(req, res, next) {
  res.send({message: 'TODO: RESTful API'});
});

module.exports = router;