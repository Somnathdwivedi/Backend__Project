const express = require("express");
const app =  express();


//load config from env

require ("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body


app.use(express.json());

//imort routes for TODO API

const todoRoutes = require("./routes/todos");
//mount the todo ASPI routes

app.use("/api/v1" , todoRoutes);


app.listen(PORT, () =>{
  console.log(`Server started successfully at ${PORT}`);
})


//connect to the database 

const dbConnect = require("./config/database");
dbConnect();


//default Route 

app.get("/", (req,res) => {
  res.send(`<h1>This is HomePage</h1>`);
})