/**
 * 
 */

var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
mongoclient.connect("mongodb://localhost/admin", function(err, db) {
	var adminDb = db.admin();
	if(err){
		console.log("ERROR"+err);
		
	}else{
		
		console.log("  connected "+db);
		// The serverstatus is available only on the adminDb
		adminDb.serverStatus( function (err1,status){
			console.log(" adminDb status after  db.admin();"+status);
			db.close();
			
		});
		
		
	}
	
})