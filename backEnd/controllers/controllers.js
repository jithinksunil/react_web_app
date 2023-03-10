const userCollection = require("../models/userSchema")
const jwt=require('jsonwebtoken')

module.exports={
    validateToken:(req,res)=>{
        
        const token =req.cookies.jwt_token
        jwt.verify(token, 'mySecretKey', (err, decoded) => {
            if (err) {
                res.json({ validationSuccessful:false });
            }else {
                let email=decoded.email
                res.status(200).json({ validationSuccessful:true,email });
            }
        })
    },

    validateAdminToken:(req,res)=>{
        const adminToken =req.cookies.adminToken
        jwt.verify(adminToken, 'mySecretKey', (err, decoded) => {
            if (err) {
                res.json({ validationSuccessful:false });
            }else {
                
                res.status(200).json({ validationSuccessful:true });
            }
        })
    },

    userLogin:async(req,res)=>{
        const {email,password}=req.body
        let userExist=await userCollection.findOne({email:email})
        if(userExist){
            if(userExist.password==password){
                const token = jwt.sign(req.body, 'mySecretKey', { expiresIn: '1h' });
                console.log(token)
                res.json({userExist:true,passWordVerified:true,token})
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
        const userDetails=await userCollection.findOne({email:req.body.email})
        res.json(userDetails)
        console.log(userDetails);
    },

    addImage:async(req,res)=>{
        console.log(req.file);
        await userCollection.updateOne({_id:req.params.userid},{image:req.file.filename})
    },

    adminLogin:async (req,res)=>{
        const {email,password}=req.body
        if(email=='admin@gmail.com'){
            if(password=='123'){
                const adminToken = jwt.sign(req.body, 'mySecretKey', { expiresIn: '1h' });
                res.json({adminExist:true,passWordVerified:true,adminToken})
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
        const userEmail=req.params.userEmail
        await userCollection.updateOne({email:userEmail},req.body)
        res.json({status:true})
    },

    deleteUser:async (req,res)=>{
        await userCollection.deleteOne({_id:req.body.userId})
        res.json({status:true})
    }
}