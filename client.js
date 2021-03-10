const net = require('net');
const {IP, PORT} = require('./constants')


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log("data came back from server: ");
    console.log(data);
  })
  conn.write('Name: Gab') 

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
    console.log(connect)
      
    // conn.write("Move: up",(connect) => {
    //   console.log("you moved up!")
    //   console.log(connect)
    // })
  })
  return conn;
}


module.exports = connect;