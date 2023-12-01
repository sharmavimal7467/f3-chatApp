// let a = 10;
// console.log(a);
//we can do anythink as we do in the browser

// function sum(c,b){
//     console.log(c+b);
// };
// sum(23,45);

//write clear to clear terminal

//express js gives logic for writting for backend server
//npm:-node package manager(package manager)-->for js

//if we want to use express code in our project we have to import it in our project bcz we don't get this out of bx(mns from node.js)

//to use npm we initsalised it:- npm init(if we write simple it demand some key value for it we use(npm init - y) is set the value bydeafult); 

//we stop function of terminal by(ctrl+c);



//how we push express code in our project:- npm i express

const express = require('express');//i'm getting this express from node_modules and store it in a variable we can select any name for this variable.
// const { appendFile } = require('fs');
//express variable is a function that return us a server.


const http = require("http");//we getting this from the node.js not from npm;

const socketIo = require("socket.io");

const ExpressServer = express();//i have a server in app variable,this app is a express server.

// convert ExpressServer to http server
const httpServer = http.createServer(ExpressServer);

const SocketServer = socketIo.Server;   //class that have a constructor function
// console.log(socketServer);

const io = new SocketServer(httpServer); //this class require a server to create  an io that is associated with io,this accepts only http server.
// console.log(io);

//io have 2 property:-1-on to get something & 2-emit to release 




const PORT = 9000;//we can't save 2 server on the same port.



    // ExpressServer.use( (req,res) => {
    //     console.log("this is a middleware");
    //     res.send("testing");
    // });


    

    // console.log("before io");


    io.on("connection" , (socket)=>{
        // console.log(socket.id);  //ot will create new id every time we will refresh
        // console.log("anythink");

        socket.on('this is a msg event',(data)=> {//receive msg from the ui.----(2)
                io.emit('this is a msg event',data);
                //we do io so every socket will listen this msg
        });
    });


    // console.log("after io");


    ExpressServer.use(express.static('FrontEnd'));

   





//if someone send empty route we do:-

ExpressServer.get("/",(req,res)=>{
    res.send("Hello World");
});

ExpressServer.get("/vimal",(req,res)=>{
    res.send("You will become frontend engineer asap");
});

//url:-simple web link,like:-www.google.com(url)
//route:-if we add something at the end after '/' it will become route,like:www.google.com/map(/map route)



httpServer.listen(PORT,()=>{
    console.log(`ExpressServer is up and we show running on https://localhost:${PORT}/`);  //it show cannot GET mns server work but not get anythink to it.
});//this app is a server provide some property to it & it take function as parameter

//here we update but not visible in termina bcz this server want restart close me(ctrl+c) and again open me.(nodemon is solution of this problem)


//alternate of above is we installing nodemon 'npm install -g nodemon'<-->'npm install --save-dev nodemon'<--> 'nodemon --version' and using the command 'nodemon fileName'.





// -------------------------------------------------------------



