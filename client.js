const teacherSocket = io("/teacher");

teacherSocket.on("connect", (data) => {
    teacherSocket.emit("teacher-server", "message from teacher in client");
    teacherSocket.on("teacher-client", data => {
        console.log(data)
    })
})

const studentSocket = io("/student");
studentSocket.on("connect", () => {
    studentSocket.on("student-client", data => {
        console.log(data)
    })

    studentSocket.emit("student-server", "message from student in client")
})