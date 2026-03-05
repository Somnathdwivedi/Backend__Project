//import the model

const { response } = require("express");
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
  try{
    //extrsact tittle and description from request body 
    const {tittle,description} = req.body;
    //create a new Tod and insert in DB
    
    const response = await Todo.create({tittle,description});
    //send a json responce with a success flag 
    res.status (200).json(
      {
        success:true,
        data:response,
        message:'Entry Creater Successfully'
      }
    );

  }
  catch (error){
      console.error(err);
      console.log(err);
      res.status(500)
      .json({
        success:false,
        data:"internal server error",
        message:err.message,
      })
  }
}