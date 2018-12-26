console.log('Started with Node', process.version);

process.on('beforeExit', code => {
  console.log('beforeExit', code);
});

process.on('exit', code => {
  console.log('exit', code);
});

process.on('SIGINT', code => {
  console.log('SIGINT', code);
});

process.on('SIGUSR1', code => {
  console.log('SIGUSR1', code);
});

process.on('SIGUSR2', code => {
  console.log('SIGUSR2', code);
});

process.on('uncaughtException', code => {
  console.log('uncaughtException', code);
});
