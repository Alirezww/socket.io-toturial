const socket = io("http://localhost:3000");

socket.on("connect", (data) => {
    socket.emit("welcome-server", "hello Server!!!i am a front developer");
    socket.on("welcom-client", data => {
        console.log(data)
    })
})