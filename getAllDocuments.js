/**
 * Refer http://mongodb.github.io/node-mongodb-native/2.2/api for API
 */

var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
mongoclient.connect("mongodb://localhost/cricket", function(err, db) {
	
	if(err){
		console.log("ERROR"+err);
		
	}else{
		//The other option is to connect just to localhost
		// and then do var myDb=db.db("cricket"); Then work with myDb
		console.log("  connected "+db);
		db.collection("cricketScores", function(err1, cricketScores){
			console.log("cricketScores-->"+cricketScores);
			cricketScores.find(function (err2, docCursor)
			{
				docCursor.forEach(function( doc)
				{
					console.log("doc "+JSON.stringify(doc));
				});
				db.close();
			});
			
			
		});
		
		
	}
	
	
})