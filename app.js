const express = require('express');
const app = express();
const ejs = require('ejs');
const socket = require('socket.io');

app.use(express.static("public"));
app.set('view engine','ejs');


app.get("/",function(req,res){
    res.render('home');
});

app.listen(3000,function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("3000");
  }
});
