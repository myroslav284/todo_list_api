const asyncHandler = require("express-async-handler");
const Todo = require("../models/Todo");

const createTask = asyncHandler(async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
    completed: req.body.completed,
  });
  if (!req.body.task) {
    res.status(402).json({
      message: "Todo must contain task",
    });
  }
  const newTodo = await todo.save();
  res.status(201).json(newTodo);
});

const getAllTasks = asyncHandler(async (req, res) => {
  const todo = await Todo.find();
  res.status(200).json(todo);
});

const deleteTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const todo = await Todo.findOneAndDelete({ _id: taskId });
  if (!todo) {
    res.status(404).json({
      message: "This todo doesn't exist",
    });
  }
  res.status(202).json(todo);
});

const getOneTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const todo = await Todo.findById({ _id: taskId });
  if (!todo) {
    res.status(404).json({
      message: "This todo doesn't exist",
    });
  } else{
  res.status(200).json(todo);
}});

const updateTask = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  const todo = await Todo.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
  });
  if (!todo) {
    res.status(404).json({
      message: "This todo doesn't exist",
    });
  }
  res.status(200).json(todo);
});

module.exports = {
    createTask,
    getAllTasks,
    deleteTask,
    getOneTask,
    updateTask
}