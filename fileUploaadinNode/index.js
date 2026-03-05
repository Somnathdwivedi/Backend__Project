//app creat
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

//Port find karna hai
require("dotenv").config();
  const Port =  process.env.PORT || 3000;
  

// middleware krna h
app.use(express.json());
const  fileUpload = require("express-fileupload");
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/tmp/'
}));

//db connect krna h
const db =require("./config/database");
db.connect();

// cloud se connect krna hai
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinarayConnect();

//api route mount 
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);


//activate karna hai
app.listen(Port ,() => {
  console.log("App is running at ->",Port);
})

