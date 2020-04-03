const express = require("express");
const mongoose = require("mongoose");
const todolistRouter = require("./router/todolistRouter");
const config = require("./config/config");
const path = require("path"); 
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")

app.use(todolistRouter)

const port = process.env.PORT || 8010;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(config.databaseURL, options).then(() => {
    console.log("Successful")
    app.listen(port);
})
