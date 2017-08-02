/**
 * 
 */

var mongoose = require("mongoose");
var cricketScoreShemaModule = require("./cricketschema.js");
var cricketScoreSchema = cricketScoreShemaModule.cricketScoreSchema;
var cricketScoreModel = mongoose.model('cricketScoreModel',cricketScoreSchema);
mongoose.connect("mongodb://localhost/cricket");
mongoose.connection.once('open', function(){
	// Remove all records where runs = 6. If the {"score":6}, is
	// not present, all records would be removed.
	// Refer http://mongoosejs.com/docs/api.html#model_Model-remove for API
	cricketScoreModel.remove({"runs":-2}, function (err, removedReds){
		console.log(" Number of removed records "+removedReds);
		mongoose.disconnect();
		
	});
	
});

