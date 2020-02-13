const mongoose = require("mongoose");

const schemaTodoList = new mongoose.Schema(
    {
        todo: String,
        date: { type: Date, default: Date.now },
    }
);

const Todo = mongoose.model("todolist", schemaTodoList);

module.exports = Todo;

// såhär jobbar vi med datan till och från databasen, beskriver hur vi jag jobba och lagara i databasen