const express = require('express'); 
const mongoose = require('mongoose');

const app = express(); // starting express

// Connecting database 
const url= "mongodb+srv://Nutika:Nutika123@cluster0.ylwuewe.mongodb.net/?retryWrites=true&w=majority";
module.exports = url;
mongoose.connect(url);
mongoose.connect(url).then(()=>{
    console.log("Databases Connected");
}).catch((err)=>{
    console.log(err);
    console.log("Couldn't connect to MongoDB");
})
  

app.use(express.json());

// importing Routers
const Router = require('./Routes/Router')
app.use('/api/books',Router);

app.listen(3001,()=>{
    console.log('Server started');
})



