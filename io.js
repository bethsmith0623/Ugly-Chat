var io = require('socket.io')();

io.on('connection', function(socket){
    console.log("Connected to socket.io");
});

module.exports = io;