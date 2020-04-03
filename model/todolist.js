const mongoose = require("mongoose");

const schemaTodoList = new mongoose.Schema(
    {
        todo: String,
        date: String,
    }
);

const Todo = mongoose.model("todolist", schemaTodoList);

module.exports = Todo;
