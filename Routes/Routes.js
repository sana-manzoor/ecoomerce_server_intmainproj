//import express
const express=require('express')


//import controller function to resolve requests
const usercontroller=require('../Controller/userController')
const productcontroller=require('../Controller/productController')
const wishController=require('../Controller/wishController')
const cartController=require('../Controller/cartController')
const orderController=require('../Controller/orderController')


//multer import
const multerConfig=require('../Middleware/productMiddleware')
const jwtMiddleware=require('../Middleware/jwtMiddlewares')
const multer = require('multer')

//create object for router class in express
const router=new express.Router()

router.post('/user/register',usercontroller.register)
router.post('/user/login',usercontroller.login)

router.post('/add/product',jwtMiddleware,multerConfig.single('product_image'),productcontroller.addProducts)
router.get('/admin/userslist',usercontroller.allusers)
router.delete('/deleteuser/:id',jwtMiddleware,usercontroller.userdel)
router.get('/admin/prodlist',productcontroller.allproduct)
router.delete('/deleteprod/:id',jwtMiddleware,productcontroller.proddel)
router.put('/editproduct/:id',jwtMiddleware,multerConfig.single('product_image'),productcontroller.editProduct)
router.get('/category/:id',productcontroller.getcategory)
 router.get('/viewprod/:id',productcontroller.viewproduct)
 router.get('/lowtohigh',productcontroller.filterlow)

 router.post('/addwish',wishController.addToWish)
 router.get('/wishlist/:id',wishController.getwishlist)
 router.delete('/delwish/:id',wishController.deletewish)

 router.post('/addcart',cartController.addtoCart)
 router.get('/cartlist/:id',cartController.getcartlist)
 router.delete('/delcart/:id',cartController.deletecart)
 router.delete('/cartdel/:id',cartController.deleteallcart)
 router.get('/inccart/:id',cartController.incCartQuantity)
 router.get('/deccart/:id',cartController.decQuantity)

 router.post('/addorder',orderController.addOrders)


module.exports=router