const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async (req, res) => {
  try {
   
    const {id} = freq.parmas;
    const {tittle,description} = req.bodyl

    const todo = await Todo.findById(
      {_id:id},
      {tittle,description,updatedAt:Date.now()},
    )

    res.status(200).json({
      success: true,
      data: todo,
      message: "  Updated Successfully",
    });

  } catch (error) {
    console.log("Error in detching data from database.");
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};