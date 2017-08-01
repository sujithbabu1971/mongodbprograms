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
		// The serverstatus is available only on the adminDb
		db.collections(function(err1, coll){
			console.log("coll-->"+coll);
			console.log("coll size -->"+coll.length);
			for(var i=0; i< coll.length;i++){
				// Search for https://docs.mongodb.com/manual/reference/glossary/ to
				// understand what a namespace is
				console.log("coll name-->"+i+"-->"+coll[i].namespace);
				
			}
			
			
		});
		
		
	}
	db.close();
	
})