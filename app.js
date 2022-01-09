const express=require('express')

const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const PORT=process.env.PORT ||3000;


const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// Setting up Database
mongoose.connect('mongodb://localhost:27017/wikiDB',{useNewUrlParser:true});

// creating schema

const articleSchema={
    title:String,
    content:String
}

const Article=mongoose.model("Article", articleSchema);




app.get("/", (req, res) => {
    res.send("Hi")
})


app.listen(PORT,()=>{
    console.log("Server started at port 3000");
})