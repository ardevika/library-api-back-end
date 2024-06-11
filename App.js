const express=require("express")
const mongose =require("mongose")
const cors=require("cors")

const app=express()
app.use(cors())

app.get("/",(req,res)=>
{res.send("welcome")


    app.get("/search",(req,res)=>{
        res.send("search something")
    })
    app.get("/delete",(req,res)=>{
        res.send("delete something")
    })
    app.get("/viewall",(req,res)=>{
        res.send("viewall")
    })
    app.listen(8081,()=>{
        console.log("server started")
    })
})