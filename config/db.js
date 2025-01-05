const mongoose=require('mongoose')

const connection=mongoose.connect('mongodb://0.0.0.0/BACKEND_DEV').then(()=>{
    console.log('Connected to MongoDB')
})

module.exports=connection