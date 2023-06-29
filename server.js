const express = require("express");
const app = express();
const cors = require("cors")
const mysql = require("mysql2")
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"airbnbclone"
})
app.use(cors())
app.get("/offers/:id/:num",(req,res,next)=>{
    let a = parseInt(req.params.id)
    let b = parseInt(req.params.num)

    if(!isNaN(a)&& !isNaN(b))
    db.query("SELECT * FROM offers LIMIT ?,?",[a,b],(err,data,fields)=>{
        if(err){console.log(err); return}
        res.send(data);
    })
})
app.get("/img/:id",(req,res,next)=>{
    res.sendFile(__dirname+"/imgs/"+req.params.id)
})
app.listen(5000,()=>console.log("Server working!"))