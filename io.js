var io = require('socket.io')();
// listening for new connections from client (socket)
io.on('connection', function(socket) {
  socket.on('add-circle', function(data) {
    io.emit('add-circle', data);
  });
  socket.on('clear-circles', function() {
    io.emit('clear-circles');
  });
 });
// io represents socket.io on server - export
module.exports = io;
