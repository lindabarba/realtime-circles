var io = require('socket.io')();

var players = {};
// listening for new connections from client (socket)
io.on('connection', function(socket) {
  socket.on('add-circle', function(data) {
    io.emit('add-circle', data);
  });

  socket.on('clear-circles', function() {
    io.emit('clear-circles');
  });

  socket.on('disconnect', function() {
    delete players[socket.id];
    io.emit('update-player-list',
      Object.keys(players).map(id => players[id])
    );
  });

  socket.on('register-player', function(initials) {
    players[socket.id] = initials;
    io.emit('update-player-list',
      Object.keys(players).map(id => players[id])
    );
  });

 });


// io represents socket.io on server - export
module.exports = io;
