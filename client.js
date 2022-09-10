const socket = io("http://localhost:3000/");

socket.on("connect", () => {
    const sendBtn = document.getElementById("sendBtn");
    sendBtn.addEventListener("click", (e) => {
        const textBox = document.getElementById("text");
        const message = textBox.value;
        if(!message) return alert("text message can not be empty!!!");
        socket.emit("clientMessage", message);

        textBox.value = "";
    })
});

socket.on("serverMessage", (message) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.innerHTML = message;

    const chatBoxElement = document.querySelector(".chatBox");
    chatBoxElement.appendChild(paragraphElement);
})