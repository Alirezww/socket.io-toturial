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

io.of("/teacher").on("connection", (socket) => {
    socket.on("teacher-server", (data) => {
        console.log(data)
    });

    socket.emit("teacher-client", "message from teacher in server.")
});

io.of("/student").on("connection", (socket) => {
    socket.emit("student-client", "message from student in server");

    socket.on("student-server", (data) => {
        console.log(data);
    })
})

server.listen(3000, () => { console.log("The server is running on port 3000") })