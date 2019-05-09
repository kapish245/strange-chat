var socket = io.connect('localhost:3000');

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    naam = document.getElementById('naam').innerHTML,
    typing = document.getElementById('typing');


//var naam = prompt("enter your name");
//console.log(naam);

//document.getElementById('naam').innerHTML = naam  ;


btn.addEventListener("click", function () {
    socket.emit('chat', {
        message: message.value,
        name: naam
    });

});


   message.addEventListener("keypress",function(){
       socket.emit("typing",naam);
});

socket.on('chat', function (data) {
    console.log(data);
    if (data.message) {
        typing.innerHTML = "";
        output.innerHTML += "<p><strong>" + data.name + ": </strong>" + data.message + "</p>";
        message.value = "";
    } else {
        output.innerHTML += "<p><strong>" + data.name + ": </strong>" + " ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ " + "</p>";

    }

});

socket.on("typing",function(data){
   typing.innerHTML = "<p><em>  " + data + " is typing</em></p>" 
});
