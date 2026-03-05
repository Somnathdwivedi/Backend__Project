const File = require("../models/File");
const cloudinary = require("cloudinary").v2;


//localFIleUpload krna hai
exports.localFileUpload = async(req,res) => {
  try{
    //fetch file
    const file = req.files.file;
    console.log("File AAGYE JEe ->",file);

    let path = __dirname +"/files/" + Date.now()+`.${file.name.split('.')[1]}`;
    console.log("Path->",path);

    //file move
    file.mv(path, (error)=>{
      console.log(error);
    });

    res.json({success:true,
      message:'Local File Uploaded Successfully'
    });
  }
  catch(error){
    console.log(error);
  }
}

function isFileTypeSupported(type,supportedType) {
  return supportedType.includes(type);
}

async function uploadFileCloudinary(file,folder,quality) {
  const options = {folder};
  console.log("temp File path->",file.tempFilePath);

  if(quality){
    options.quality = quality;
  }


  options.resource_type="auto";
  await cloudinary.uploader.upload(file.tempFilePath,options);
}

//image upload ka handler likhna h
exports.imageUpload = async (req,res) => {
  try {
    //data fetch kar lenge
    const {name,tags,email} =req.body;
    console.log(name,tags,email);

    const file = req.files.imageFile;
    console.log("File name",file);

    //validation
    const supportedType = ["jpg","jpeg","png"];
    const fileType = file.name.split('.')[1].toLowerCase();
    console.log("File Type -> ",fileType);

    if(!isFileTypeSupported(fileType, supportedType)){
      return res.status(400).json({
        success:false,
        message:'File formet not supported',
      })
    }

    //File formet Supported hai toh upload karna hai
    
    const response = await uploadFileCloudinary(file,"tesUpload");
    console.log(response);

    //db main entry save karni hai 
    const fileData =  await File.create({
      name,
      tags,
      email,
      //imageUrl:response.secure_url,
    })

    res.json({
      success:true,
      //imageUrl:response.secure_url,
      message:"Successfully Uploaded."
    })
  }
  catch(error){
    console.error(error);
    res.status(400).json({
      success:true,
      message:'Something went wrong',
    })
  }
}


//video upload karna hai
exports.videoUpload = async (req,res) => {
  try {
    // file fetch karna hai
    const {name,tags,type} = req.body;
    console.log(name,tags,type);

    const file = req.files.videoFile;
    console.log("Video file name",file);

    // validation krna hai
    const supportedType = ["mp4","AVI","mov"];
    const fileType = file.name.split('.')[1].toLowerCase();
    console.log("File Type -> ",fileType);

    //h/w  upperlimit 5mb se jyada nhi karna hai
    if(!isFileTypeSupported(fileType, supportedType)){
      return res.status(400).json({
        success:false,
        message:'File formet not supported',
      })
    }



    //file sahi h toh cloudinary pe upload kar do
    //TODO  height Attribute ka use karke quality reduce karni hai
    const response = await uploadFileCloudinary(file,"tesUpload",80);
    console.log(response);

    //db main entry save karni hai 
    const fileData =  await File.create({
      name,
      tags,
      type,
      //imageUrl:response.secure_url,
    })

    res.json({
      success:true,
      //imageUrl:response.secure_url,
      message:"Video Successfully Uploaded."
    })

  }
  catch(error) {
    res.status(400).json({
      success:false,
      message:'Something went wrong'
    })
  }
}


//image File Reducer
exports.imageFileReducer = async (req,res) => {
  try{
     // file fetch karna hai
     const {name,tags,email} = req.body;
     console.log(name,tags,email);
 
     const file = req.files.imageFile;
     console.log("Video file name",file);
 
     // validation krna hai
     const supportedType = ["jpg","jpeg","png"];
     const fileType = file.name.split('.')[1].toLowerCase();
     console.log("File Type -> ",fileType);
 
     //h/w  upperlimit 5mb se jyada nhi karna hai
     if(!isFileTypeSupported(fileType, supportedType)){
       return res.status(400).json({
         success:false,
         message:'File formet not supported',
       })
     }
 
     //file sahi h toh cloudinary pe upload kar do
     const response = await uploadFileCloudinary(file,"tesUpload");
     console.log(response);
 
     //db main entry save karni hai 
     const fileData =  await File.create({
       name,
       tags,
       email,
       //imageUrl:response.secure_url,
     })
 
     res.json({
       success:true,
       //imageUrl:response.secure_url,
       message:"Video Successfully Uploaded."
     })
 
  }
  catch(error) {
    res.status(400).json({
      success:false,
      message:'SOmething Went wrong'
    })
  }
}

