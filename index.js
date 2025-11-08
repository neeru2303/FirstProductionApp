require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/twitter", (req, res) => {
  res.send("neerajverma2328");
});

app.get("/youtube", (res, req)=>{
  res.send("chai aur code.")
})

app.get("/login", (req, res) =>{
  res.send("<h1>Please login student management system<h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
