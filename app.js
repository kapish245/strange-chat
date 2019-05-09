const express = require('express');
const socket = require('socket.io');


const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const server = app.listen(3000,function(){
    console.log("3000");
});



app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine','ejs');


var io = socket(server); 


io.on('connection',function(socket){
    console.log('userconnected',socket.id);
   
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })
    
    socket.on('typing',function(data){
        socket.broadcast.emit("typing",data);
    })
    
    socket.on("disconnect",function(){
        console.log("discoonected");
    })
});


//
app.get("/",function(req,res){
//         res.sendFile(__dirname + "/index.html");
    res.render("home");
});

app.post("/",function(req,res){
    var nick = req.body.nick;
    res.render("chat",{nick:nick});
});
//
//app.get("/chat",function(req,res){
//    res.render("chat",{nick:nicky});//
//});