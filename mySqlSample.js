/**
 * http://usejsdoc.org/
 */
var mySql = require('mysql');
var connection = mySql.createConnection(
		
		{host: 'sujithmysql1.cizimliajkqm.us-east-2.rds.amazonaws.com',
		user:'sujithmysql1',
		password:'sujithmysql1myaomyao',
		port:3306,
		database:'sujith'});
connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	 
	  console.log('connected as id ' + connection.threadId);
	});
connection.query('SELECT * from test', function (error, results, fields) {
	  if (error) {throw error;}
	  else{
		  console.log("Success");
		  var size = results.length;
		  console.log("No of records "+size);
		  for ( var index=0; index< size; index++){
			  
			  console.log(results[index]['id']);
		  }
	  }
	  // connected! 
	});