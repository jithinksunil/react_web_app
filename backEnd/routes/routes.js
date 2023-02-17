const express=require('express')
const router=express.Router()
const controller=require('../controllers/controllers')

const upload = require('../config/multer')

router.get('/tokenvalidation',controller.validateToken)
router.get('/admintokenvalidation',controller.validateAdminToken)
router.post('/',controller.userLogin)
router.post('/userrigistration',controller.userRegistration)
router.post('/userprofile',controller.userProfile)
router.post('/addimage/:userid',upload.single('file'),controller.addImage)
router.post('/adminlogin',controller.adminLogin)
router.get('/admin',controller.adminPage)
router.post('/userupdate/:userEmail',controller.userUpdate)
router.post('/deleteuser',controller.deleteUser)

module.exports=router
