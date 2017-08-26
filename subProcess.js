/**
 *  This will run only with mainProcessWithSubInteraction.js
 *  This is sub process. The main process is in mainProcessWithSubInteraction.js
 *  Refer https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html

 */
process.on('message', (m) => {
  console.log('CHILD got message:', m);
});

process.send({ foo: 'bar' });