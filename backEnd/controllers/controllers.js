const userCollection = require("../models/userSchema")

module.exports={
    userLogin:async(req,res)=>{
        const {email,password}=req.body
        let userExist=await userCollection.findOne({email:email})
        if(userExist){
            if(userExist.password==password){
                res.json({userExist:true,passWordVerified:true})
            }
            else{
                res.json({userExist:true})
            }
        }else{
            res.json({userExist:false})
        }
    },

    userRegistration:async(req,res)=>{
        const newUser=req.body
        await userCollection.insertMany([newUser])
        res.json({status:true})
    },

    userProfile:async (req,res)=>{
        const userDetails=await userCollection.findOne({_id:req.body._id})
        res.json(userDetails)
        console.log(userDetails);
    },

    adminLogin:async (req,res)=>{
        const {email,password}=req.body
        if(email=='admin@gmail.com'){
            if(password=='123'){
                res.json({adminExist:true,passWordVerified:true})
            }
            else{
                res.json({adminExist:true})
            }
        }else{
            res.json({adminExist:false})
        }
    },

    adminPage:async(req,res)=>{

        const users=await userCollection.find()
        res.json({users})
        
    },

    userUpdate:async (req,res)=>{
        const userid=req.params.userid
        await userCollection.updateOne({_id:userid},req.body)
        res.json({status:true})
    },

    deleteUser:async (req,res)=>{
        await userCollection.deleteOne({_id:req.body.userId})
        res.json({status:true})
    }
}