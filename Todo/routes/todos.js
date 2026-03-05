const express = require("express");
const router = express.Router();


//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deletetodo} = require("../controllers/deleteTodo");


//define API routes

router.post ("/createTodo" ,createTodo);
router.get("/getTodo" , getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id" , updateTodo);
router.delete("/deleteTodo/:id" , deletetodo);

module.exports = router;