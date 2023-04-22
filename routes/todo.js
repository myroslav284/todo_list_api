const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
  getOneTask,
} = require("../controllers/todoControllers");

router.route("/").post(createTask).get(getAllTasks);

router.route("/:id").delete(deleteTask).get(getOneTask).put(updateTask);

module.exports = router;
