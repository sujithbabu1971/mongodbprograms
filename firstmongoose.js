/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/cricket",{useMongoClient:true});

var cricketScoreSchemaModule = require("./cricketschema.js");
var cricketScoreSchema = cricketScoreSchemaModule.cricketScoreSchema;
var cricketScoreModel = mongoose.model('cricketScoreModel',cricketScoreSchema );
mongoose.connection.open('open', function(){
	
	var query = cricketScoreModel.find();
	query.where('batsman', 'Tendulkar');
	//query.where('score55', '$gt:5');
	// Show only these fields
	// Refer the API http://mongoosejs.com/docs/3.0.x/docs/api.html
	
	query.select('batsman');
	// _id gets eelected always. So avpid it
	query.select('-_id');
	query.exec(function (err, results){
		for (var i = 0; i < results.length; i++) {
			console.log(results[i]);
		}
		
	});
});
mongoose.disconnect();
