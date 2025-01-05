// const Catme= require('cat-me');
// console.log(Catme())

const express =require('express');
const userModel=require('./models/user')
const dbConnection=require('./config/db')
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


app.post('/',async (req,res)=>{
    console.log(req.body)


    const{username,email,password}=req.body

    await userModel.create({
        Username:username,
        Email:email,
        Password:password
    })

    res.send('data received')
})

//Read


// app.get('/get-users',(req,res)=>{
//     userModel.find({}).then((data)=>{
//         res.send(data)
//     })
// })

 

app.get('/get-users',(req,res)=>{
    // userModel.find({
    //     Username:'Harshdeep'
    userModel.findOne({
        Username:'Harsh'
    }).then((data)=>{
        res.send(data)
    })
})

app.get('/update-users',(req,res)=>{
    userModel.findOneAndUpdate({
        Username:'Harsh'
    },{Email:'abcd@gmail.com'})
    res.send("user updated")
}) 
app.listen(3000)