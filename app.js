// const Catme= require('cat-me');
// console.log(Catme())

const express =require('express');
const app =express();

app.set("view engine",'ejs')
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('This is about page')
})
app.listen(3000)