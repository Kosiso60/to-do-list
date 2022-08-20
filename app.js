const express = require("express");
const bodyParser = require("body-parser");


const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.get("/", function (req, res){
    
    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
  let day = today.toLocaleDateString("en-US", options)

    res.render("List", { kindOfDay: day, newListItems: items})
});

app.post("/", function(req, res){
  let  item = req.body.newItem;
  items.push(item)
    res.redirect("/");
})

app.listen(8080, function(){
    console.log("server started at port 8080")
})