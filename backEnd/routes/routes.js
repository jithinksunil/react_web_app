const express=require('express')
const router=express.Router()
const controller=require('../controllers/controllers')

router.post('/',controller.userLogin)
router.post('/userrigistration',controller.userRegistration)
router.post('/userprofile',controller.userProfile)
router.post('/adminlogin',controller.adminLogin)
router.get('/admin',controller.adminPage)
router.post('/userupdate/:userid',controller.userUpdate)
router.post('/deleteuser',controller.deleteUser)

module.exports=router
