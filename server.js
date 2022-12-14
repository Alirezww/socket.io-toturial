const http = require("http");
const socketIO = require("socket.io");
const express = require("express");

const app = express()
const server = http.createServer(app);

app.use(express.static("./"))

const io = socketIO(server, {
    cors : {
        origin : "*"
    } 
});

io.on("connection", (socket) => {
    socket.on("clientMessage", (data) => {
        socket.emit("serverMessage", data);
    })
})

server.listen(3000, () => { console.log("The server is running on port 3000") })