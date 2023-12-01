// console.log("Ram");

var socket = io(); //this line is a causing the connection event on the server.

let userName = "";
let userNumber = "";
const form = document.getElementById("form");
const UserNameInput = document.getElementById("UserName");
const userNumberInput = document.getElementById("userNumber");
const LoginBtn = document.getElementById("Login");
const chatRoomContainerBox = document.getElementById("chatRoomContainer");
const typeTextArea = document.getElementById("textArea");
const sendBtnInfo = document.getElementById("sendBtn");
const mainTextBody = document.getElementById("textBody");

LoginBtn.addEventListener("click",(event)=>{
    event.preventDefault();  //this also remove required attribute.
    event.stopPropagation();
    userName = UserNameInput.value;
    userNumber = userNumberInput.value;
    if(userName && userNumber){
        form.style.display = "none"; 
        chatRoomContainerBox.style.display = "block";  
        console.log("form disAppear");
    };
});

function renderMessage(dataObj , typeOfMsg){
const msgDiv = document.createElement("div");
msgDiv.innerText = `${dataObj.username} : ${dataObj.message}`;
if(typeOfMsg === "SENT"){
    msgDiv.setAttribute('class','msg msgAlign');
}else{
    msgDiv.setAttribute('class','msg');  //check it for msg class or message text ?????
};
mainTextBody.append(msgDiv);
typeTextArea.value = "";
typeTextArea.focus();
};

sendBtnInfo.addEventListener("click",(e)=>{
    e.stopPropagation();
    e.preventDefault();
    let data = {
        id:socket.id,
        message:typeTextArea.value,
        username : UserNameInput.value,
    };
    socket.emit("this is a msg event", data); //this socket send msg from ui to backend socket---(1)
    renderMessage(data,'SENT');
});

socket.on("this is a msg event",(data)=>{//----(3)

    //this print msg to ourself and another one
    //we have to check here
    //if sending and reciveing devices are same don't need to call this function
    if(socket.id !== data.id){
        renderMessage(data,'REC');
    };
});



//1 & 2 are same(socket 1) and 3 are differnt socket which only listen io not listen another socket. 