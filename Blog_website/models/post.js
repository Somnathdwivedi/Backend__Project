const mongoose = require("mongoose");


const postSchema = new mongoose.Schema(
  {
    tittle:{
      type:String,
      required:true,
      maxlength:200,
    },

    // image:{
    //   type:sfs,
    // },

    createdAt:{
      type:Date,
      required:true,
      default:Date.now(),
    },

    // postedAT:{
    //   type:Date.now(),
    //   required:true,
    // },
    tags:{
      type:String,
      required:true,
      maxlength:100,
    },
  }
);

module.exports = mongoose.model("Post", postSchema);