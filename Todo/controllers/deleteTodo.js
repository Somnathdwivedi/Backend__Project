const Todo = require("../models/Todo");

//define route handler

exports.deletTodo = async (req, res) => {
  try {
   
    const {id} = req.params;
    await Todo.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "  Todo Deleted  Successfully",
    });

  } catch (error) {
    console.log("Error in deleted data from database.");
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};