let connection;



const setupInput = function(conn) {
  const connection = conn
  const stdin = process.stdin;
  // stdin.on('data', handleUserInput )
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
     stdin.on('data', (key) => {
       if (key === '\u0003') {
         process.exit();
       } else if (key === '\u0077'){
        connection.write('Move: up')
        console.log("You moved up")
       } else if (key === '\u0073') {
         connection.write('Move: down')
         console.log("You moved down")
       } else if (key === '\u0061') {
         connection.write("Move: left");
         console.log("You moved left")
       } else if (key === '\u0064') {
         connection.write("Move: right");
         console.log("You moved right")
       }
     })
  }
  handleUserInput()
  return stdin;
}

module.exports = setupInput