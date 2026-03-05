const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>  {
  mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then ( () => console.log("DB Connection is Successful."))
  .catch((err)=>{
    console.log("DB does not Connected to Database")
    console.error(err.message)
    process.exit(1);
  });

}


module.exports = dbConnect;

