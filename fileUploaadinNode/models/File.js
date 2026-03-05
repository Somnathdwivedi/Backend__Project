const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: { type: String },
});

//post middleware
fileSchema.post("save",async function(doc){
  try{
    console.log("Doc->",doc);

    //transpoter
    //TODO : - shift cinfuguration under '/config folder
    let transporter= nodemailer.createTransport({
      host:process.env.MIAL_HOST,
      auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS,
      }
    });


    //mail sen krna

    let info = await transporter.sendMail({
      from:'rahul',
      to:doc.email,
      subject:"New File Uploded",
      html:`<h2>Hell ji File Uploaded</h2>`,
    })

    console.log("INFO->",info);
  }
  catch(error){
    console.log(error);

  }
})




const File = mongoose.model("File", fileSchema);
module.exports = File;
