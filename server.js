const express = require('express')
var _socket = require("socket.io");
//import { Server as WebSocketServer } from 'socket.io'
const http = require('http')


const app = express()

app.set('port', process.env.PORT || 3000)

var server = http.createServer(app)

//const io = new WebSocketServer(server)
var io = new _socket.Server(server);


app.use(express.static(__dirname + "/public"))

io.on('connection', (socket) => {

    socket.on('stream', (image) => {
    

        socket.broadcast.emit('stream', image)



    })



})










server.listen(app.get('port'))

console.log("server on ", app.get('port'))


