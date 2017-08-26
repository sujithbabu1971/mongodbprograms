/**
 * Read with subProcess.js
 * Refer https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html
 */
const cp = require('child_process');
const n = cp.fork(`${__dirname}/subProcess.js`);

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

n.send({ hello: 'world' });
//And then the child script, 'sub.js' might look like this:
/**
process.on('message', (m) => {
  console.log('CHILD got message:', m);
});

process.send({ foo: 'bar' });

**/