const mongoose=require('mongoose')

const newSchema=new mongoose.Schema({//defining structure of collections
    
    name:String,
    phone:String,
    email:String,
    password:String,
    image:String
})

const userCollection=new mongoose.model('user_collection',newSchema)//creating collection using the defined schema and assign to new Model

module.exports=userCollection