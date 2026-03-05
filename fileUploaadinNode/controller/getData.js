const File = require("../models/File");

mData = {
  "working": "true"
}


exports.getData  = async (req,res) => {
  try{
    
    const data = await File.find()
    res.json(data);
    console.log(data);
    
  }catch(error){
    console.log(error);
    res.status(400).json({
      success:false,
      message:"Something Went wrong"
    })
  }
 
}