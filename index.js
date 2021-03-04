const express =require('express');
const app =express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("welcome to home page");
})

app.get("/contact",(req,res)=>{
    res.send("this page is for contact us");
})
app.get("/calculator",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});


app.post("/calculator",(req,res)=>
{
    res.send("thank you post");
    let n1=req.body.v1;

    let n2=req.body.v2;
    let sum=n1+n1;
    console.log("the sum of two number is "+sum);
});


app.listen(3000,function(req,res){
    console.log("server is running at 3000")
});