const express=require('express')
const router=express.Router()
const userController=require('../controllers/userControllers')

router.get('/',userController.userLogin)
router.post('/userrigistration',userController.userRegistration)

module.exports=router