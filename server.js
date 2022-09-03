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
    socket.on("welcome-server", (data) => {
        console.log(data)
    });

    socket.emit("welcom-client", "hello client!!! i am a backend developer")
})

server.listen(3000, () => { console.log("The server is running on port 3000") })