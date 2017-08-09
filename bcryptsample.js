/**
 * http://usejsdoc.org/
 */
// Refer the API at https://www.npmjs.com/package/bcrypt
var bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 'sujith';
const someOtherPlaintextPassword = 'sujith';
var myHash;
// Refer https://www.npmjs.com/package/bcrypt.
// I have used the Technique 1 (generate a salt and hash on separate function calls)
// mentioned in that link
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    	myHash =hash;
    	console.log(myHash);
    	// This is the compare function
    	bcrypt.compare(someOtherPlaintextPassword, myHash, function(err, res) {
    		console.log(res);
    	});
    });
});

