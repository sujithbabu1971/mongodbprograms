/**
 * 
 */

var mongoose = require("mongoose");
var cricketscoreshemamodule = require("./cricketscores.js");
var cricketscoreshema = cricketscoreshemamodule.cricketScoreSchema;
var db = mongoose.connect("mongodb://localhost/cricket");
var mydb = db.db("cricket");