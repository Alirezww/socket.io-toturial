//client
const socket = io("http://localhost:3000/", {
    query: {
        field1 : "value"
    },
    transportOptions: {
        polling : {
            extraHeaders: {
                Authorization: "Bearer token..."
            }
        }
    }
});

//server
io.on("connection", (socket) => {
    console.log("connected to server");
    console.log(socket.handshake.query)
    console.log(socket.handshake.headers['authorization'])
})