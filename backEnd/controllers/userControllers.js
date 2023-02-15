const userCollection = require("../models/userSchema")

module.exports={
    userLogin:async(req,res)=>{
        const {}=req.body
        console.log(req.body);
        let userExist=await userCollection.findOne({email})
        console.log(userExist);
    },
    userRegistration:async(req,res)=>{
        console.log(req.body)
        const newUser=req.body
        await userCollection.insertMany([newUser])
        console.log('added');
        res.json({status:true})
    }
}