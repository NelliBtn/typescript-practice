
// add ? to parameter to mark it as optional, so TS doesn't throw an error when it's not provided (undefined)
function proclaim(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaim();
proclaim('ready?');
proclaim('ready!');

/* 

OUPUT

I'm not ready...
I'm ready?
I'm ready!

*/