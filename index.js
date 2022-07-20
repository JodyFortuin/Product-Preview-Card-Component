const express = require("express");
var exphbs = require('express-handlebars');
let app = express();

require('dotenv').config()

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`)
})