const mongoose=require('mongoose')
const validators=require('validator')

const cartSchema=new mongoose.Schema({
    pid:{
        type:String,
        required:true 
    },
    title:{
    type:String,
    required:true
    },
    price:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true
    },
    
    product_image:{
        type:String,
        required:true
    },
    uid:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,

    },
    total:{
        type:Number,
       
    }
})

const carts=mongoose.model('carts',cartSchema)
module.exports=carts