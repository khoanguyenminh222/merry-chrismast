const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(process.env.PORT||8000, () => {
    console.log('http://localhost:8000')
  });