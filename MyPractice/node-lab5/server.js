const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//initialize a new instance of socket.io by passing the server (the HTTP server) object.
const { Server } = require("socket.io");
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        //emit the event from the server to the rest of the users.
        io.emit('chat message', msg);
        //display in terminal
        //console.log('message: ' + msg);
    });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
//Our code would look very confusing if we just placed our entire application’s HTML there, so instead we're going to create a index.html file and serve that instead.

//Let’s refactor our route handler to use sendFile instead.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });

server.listen(3000, () => {
  console.log('listening on *:3000');
});