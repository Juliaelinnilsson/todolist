const express = require("express");
const Todo = require("../model/todolist")

const router = express.Router();

router.get("/createtodo", async (req, res) => {
    res.render("todo");
})

router.post("/createtodo", async (req, res) => {

    //req.body alla name properties
    const todo = new Todo({
        todo: req.body.todo,
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

router.get("/todolist", async (req, res) => {
    const todoObject = await Todo.find()
    res.render("todolistViews", { todoObject });
})

router.get("/delete/:id", async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id });
    res.redirect("/todolist");
})

router.get("/update/:id", async (req, res) => {
    //hämta specifik data från databasen
    const response = await Todo.findById({ _id: req.params.id })
    //sen skicka till edit sidan
    res.render("edit", { response })
})
router.post("/update/:id", async (req, res) => {
    //använd updateOne metoden för att kunna redigera kommentarerna
    await Todo.updateOne({ _id: req.body._id },
        {
            $set: { todo: req.body.todo }
        })
    res.redirect("/todolist");
})

module.exports = router;