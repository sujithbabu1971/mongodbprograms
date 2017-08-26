/**
 * http://usejsdoc.org/
 */
// This is similar to the args in main. But by default agv[0] is node.exe 
// and agv[1] is the filename.js. The actual arguments start from argv[2].

var args = process.argv;
var argsLength = args.length;
for (var index = 0; index < argsLength; index++) {
	console.log(`${index}: ${args[index]}`);
}

console.log(args.length);
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});