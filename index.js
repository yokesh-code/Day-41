// importing libraries

const express = require('express');

const mongoose = require('mongoose');

const app = express();

const cors = require('cors')
const route = require('./routes/route')


app.use(cors({ origin: "*" }));

// connectivity of mongodb

const dbUrl = ("mongodb://localhost:27017/admin")

mongoose.connect(dbUrl,{useNewUrlParser:true});

const con = mongoose.connection;

// check using try catch method mongodb is connected !

try{
 con.on('open',()=>{
    console.log("MongoDB is connected !!!!")
 })
}catch(error)
{
    console.log("Error : "+error);
}

// initialize port 

const port = 3020;

app.listen(port,()=>{
    console.log("Port is Running on  " + port)
})


/************************************************************************** */

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",route)