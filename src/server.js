import express from "express";


const app = express();

const port =3000

app.get("/",(req,res)=>{console.log(req.rawHeaders);res.send("Hello, World!");});

app.get("/Contact",(req,res)=>{console.log(req.rawHeaders);res.send("<h1>+263776701531</h1>");});

app.get("/About",(req,res)=>{console.log(req.rawHeaders);res.send("The Universal Flames");});

app.post("/register",(req,res)=>{
    res.sendStatus(201);
});

app.put("/user/angela",(req,res)=>{
    res.sendStatus(200);
});

app.patch("/user/angela",(req,res)=>{
    res.sendStatus(200);
});

app.delete("/user/angela",(req,res)=>{
    res.sendStatus(200);
});

app.listen(port, ()=>{console.log(`Server is running at ${port}`)})