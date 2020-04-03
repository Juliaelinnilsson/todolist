const express = require("express");
const Todo = require("../model/todolist")
if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: "./.env" });
const router = express.Router();



router.get("/todolist", async (req, res) => {
    const todoObject = await Todo.find()
    res.render("todolistViews", { todoObject });

})

router.get("/createtodo", async (req, res) => {
    res.render("todo");
})

router.post("/createtodo", async (req, res) => {

    const todo = new Todo({
        todo: req.body.todo,
        date: req.body.date
    })

    await todo.save((error, success) => {
        if (error) {
            res.send(error.message)
        }
        else {
            res.redirect("/todolist")

        }
    });
});

router.get("/delete/:id", async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id });
    res.redirect("/todolist");
})

router.get("/update/:id", async (req, res) => {
    const response = await Todo.findById({ _id: req.params.id })
    res.render("edit", { response })
})
router.post("/update/:id", async (req, res) => {
    await Todo.updateOne({ _id: req.body._id },
        {
            $set: { todo: req.body.todo, date: req.body.date }
        })
    res.redirect("/todolist");
})

module.exports = router;