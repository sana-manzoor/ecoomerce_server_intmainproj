const mongoose=require('mongoose')
const validators=require('validator')

const productSchema=new mongoose.Schema({
    title:{
    type:String,
    required:true
    },
    price:{
        type:Number,
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
    userid:{
        type:String,
        required:true
    }
})

const products=mongoose.model('products',productSchema)
module.exports=products