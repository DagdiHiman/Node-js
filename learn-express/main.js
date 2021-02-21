const express = require('express')
const app = express()
app.use(express.urlencoded({extended:false}))

// We can use template engine (ejs, pug, ...) for the html part
app.get('/', (req, res) => {
  res.send(`
    <hmtl><body>
      <form action='/result' method='post'>
        rcb will <input name='q'> </input> this year !
        <button> submit </button>
      </form>
    </body></html>
  `)
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
