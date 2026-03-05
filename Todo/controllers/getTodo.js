const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async (req, res) => {
  try {
    //fetch on todo items on database
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todo,
      message: "Entire todo is fetched",
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

exports.fetTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //given data for given id  not found

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    }

    //data for given id Found 
    res.status(200).json({
      success:true,
      data:todo,
      message:'Todo ${id} data successfully fetched',
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
