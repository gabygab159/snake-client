const setupInput = function() {
  const stdin = process.stdin;
  stdin.on('data', handleUserInput )
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume(handleUserInput);
  return stdin;
}

const handleUserInput = function() {
  if (key === '\u0003') {
    process.exit();
  }
}

module.exports = setupInput