const mongoose = require("mongoose");

const schemaTodoList = new mongoose.Schema(
    {
        todo: String,
        date: String,
    }
);

const Todo = mongoose.model("todolist", schemaTodoList);

module.exports = Todo;

// såhär jobbar vi med datan till och från databasen, beskriver hur vi jag jobba och lagara i databasen