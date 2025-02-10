const express = require("express");
const router = express.Router();
const Task = require("../models/task.js");

// Home- Show All Tasks
router.get("/", async (req, res) => {
const tasks = await Task.find();
res.render("index", { tasks });
});



// Add Task
router.post("/add", async (req, res) => {
    const newTask = new Task({ title: req.body.title });
    await newTask.save();
    res.redirect("/");
});



// Delete Task
router.post("/delete/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");

});


// Mark Task as Complete
router.post("/complete/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, { completed: true });
    res.redirect("/");


});


module.exports = router;
