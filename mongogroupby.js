/**
 * Refer http://mongodb.github.io/node-mongodb-native/2.2/api for API
 */
var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
mongoclient.connect("mongodb://127.0.0.1/", function (err, db)
{
	if(err)
	{
		console.log("ERROR");
	}
	else
	{
		// Find the group by syntax in mongodb at 
		// http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html
		var mydb = db.db("cricket");
		mydb.collection("cricketScores", function(err1, colls){
			
			colls.group(["batsman"], {}, {"totalScore":0, "count":0}, 
					function (obj, prev) 
					{
						prev.totalScore= prev.totalScore+ obj.score; 
						prev.count++;
					}, {}, true,{},
					function(err, results) {
							results.forEach(function (result){
								var average = result.totalScore/result.count;
								console.log(result.batsman +" scored "+result.totalScore +" in "+result.count+" macthes with an average of "+average);
								
							})
					});
			
			
		});
		
	
	
		db.close();
	}
});