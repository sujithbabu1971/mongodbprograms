/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var cricketScoreSchema = new schema({batsman:{type:String, required:1 } ,runs:{type:Number}}, {collection:'cricketScores'});

module.exports.cricketScoreSchema = cricketScoreSchema;
