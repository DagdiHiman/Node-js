const express = require('express')
const app = express()
const path = require("path")
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// We can use template engine (ejs, pug, ...) for the html part
app.get('/', (req, res) => {
  res.render("home", {
    apis: [
      { name: "home-get", desc: "homepage get req" },
      { name: "about-get", desc: "about get req" },
      { name: "result-get", desc: "result get req" },
      { name: "result-post", desc: "result post req" }
    ]
  })
})
app.get('/about', (req, res) => {
  res.send("Myself HimanD ;)")
})
app.post('/result', (req,res) => {
  if(req.body.q.trim().toUpperCase() === "LOSE"){
    res.send("lol correct")
  }else{
    res.send("escn")
  }
})
app.get('/result', (req,res) => {
  res.send(":| Why u visiting this ??")
})

// npx nodemon main.js
app.listen(3000)
