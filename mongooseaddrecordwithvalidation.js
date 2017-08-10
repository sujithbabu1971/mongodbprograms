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
var dbString ="mongodb://sujithuser:sujithpassword@ds157500.mlab.com:57500/sujith";
//var dbString ="mongodb://localhost/cricket";

mongoose.connect(dbString);
mongoose.connection.once('open', function(){
	
	cricketScoreModel.create({"batsman":"Sunil gavaskar","runs":122}, function (err, removedReds){
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