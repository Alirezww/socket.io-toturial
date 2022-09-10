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

socket.on("connect", () => {
    console.log("connected to client..");
})