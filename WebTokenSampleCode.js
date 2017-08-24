/**
 * http://usejsdoc.org/
 */
// Refer https://www.npmjs.com/package/jsonwebtoken

var jwt = require('jsonwebtoken');
var secretKey='secret';
var token = jwt.sign({
	// Note this can be an user object from the datbase.
	// Something like userId:1,userName:sujith,password:vvv
  data: 'foobar'
	  // Expires In is in seconds
}, secretKey, { expiresIn: 30 * 60 });

console.log(token);
// Now pass it to the page using params. Include that in the page as a hidden param
// It can be set as a header also
// Now in the app.use do this
// We will need to add a new middleware. This would be similar to servlet filters

// The code would be something like
// apiRoutes.use(req,res, next){
//	var token = //get tken from header or body.
//	if(token)
//	{
//		jwt.verify(token, secretKey, function(err, decoded) {
//			if(err){
//				// Log the error,
//				// return error page
//				
//			}else{
//				// everything is fine.
//				// call next();
//			}
//			   
//			});
//	}
//	else{
//		// Log the error,
//		// return error page
//	}
////}


var decoded = jwt.verify(token, secretKey);
console.log(decoded);