const mongoose = require("mongoose");

require("dotenv").config();
 exports.connect = () =>{
  mongoose.connect(process.env.DBconnection_URL,{
    useNewParser:true,
    useUnifiedTopogy:true
  })
  .then(() =>{
    console.log("Database Connection Successfully.");
  })
  .catch(
    (err)=>{
      console.error(err);
      console.log("DB Connection Failed.");
      process.exit(1);

    }
  )
 }