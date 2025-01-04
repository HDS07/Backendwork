// const Catme= require('cat-me');
// console.log(Catme())

const express =require('express');
const app =express();

app.set("view engine",'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


// app.use((req,res,next)=>{
//     console.log("This is middleware");
//     return next()
// })



// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

app.get('/',(req,res)=>{
    res.render('index')  
})



app.get('/about',(req,res)=>{
    res.send('This is about page')
})


// app.get('/get-form-data',(req,res)=>{
//     console.log(req.query)
//     res.send('data received')
// })


app.post('/get-form-data',(req,res)=>{
    console.log(req.body)
    res.send('data received')
})

app.listen(3000)