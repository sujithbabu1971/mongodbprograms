/**
 * http://usejsdoc.org/
 */
var mongoose = require("mongoose");
var cricketScoreShemaModule = require("./cricketschema.js");
var cricketScoreSchema = cricketScoreShemaModule.cricketScoreSchema;
var cricketScoreModel = mongoose.model('cricketScoreModel',cricketScoreSchema);
cricketScoreModel.schema.path("runs").validate(function (val){
	return val>=0;
}, "Runs can not be less than zero");
mongoose.connect("mongodb://localhost/cricket");
mongoose.connection.once('open', function(){
	
	cricketScoreModel.create({"batsman":"Martin Crowe","runs":-2}, function (err, removedReds){
		if(err)
		{
			console.log(" Could not insert. Reason -->"+err.errors.runs.message);
		}
		else
		{
			console.log(" Number of added records "+1);
		}
		
		mongoose.disconnect();
		
	});
	
});