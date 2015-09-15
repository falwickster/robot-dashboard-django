var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connect', function(socket){
  console.log("User connected");
  socket.on('disconnect', function(){
    console.log("User disconnected");
  });
});
server.listen(3000);
