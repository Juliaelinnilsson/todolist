const express = require("express");
const mongoose = require("mongoose");
const todolistRouter = require("./router/todolistRouter");
const config = require("./config/config");
const path = require("path"); //för CSS
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public"))); // För CSS

app.set("view engine", "ejs")

//router
app.use(todolistRouter)


//listen to port 
const port = process.env.PORT || 8010;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(config.databaseURL, options).then(() => {
    console.log("Successful")
    //app is listening to port 
    app.listen(port);
})
