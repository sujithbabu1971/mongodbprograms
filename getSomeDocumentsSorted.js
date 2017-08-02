/**
 * Refer http://mongodb.github.io/node-mongodb-native/2.2/api for API
 */
var mongodb = require('mongodb');
mongoclient = mongodb.MongoClient;
mongoclient.connect("mongodb://localhost/cricket", function (err, db){
	
	if(err){
		console.log("ERROR");
	}else{
		
		db.collection("cricketScores", function(err1, colls) {
			// All scores greater than 9. Refer the link 
			// https://docs.mongodb.com/manual/tutorial/query-documents/
			//for all query options.
			// Show only the batsman field using the fields column
			// sort batsman in ascending order.
			// Limit to first 3 records
			// What options can be used in find (query) are available at 
			// https://mongodb.github.io/node-mongodb-native/api-generated/collection.html#find
			
			colls.find({"score":{$gt:5}}, 
					{fields:{batsman:1, _id:0},sort:[['batsman',1]], limit:3},
					function(err2, cursor){
						cursor.count(function(error, nbDocs) {
							console.log("Count of records "+nbDocs);
						})
				cursor.forEach(function( item){
					console.log(JSON.stringify(item));
				});
				
				db.close();
				
			});
			
		});
	}
});

