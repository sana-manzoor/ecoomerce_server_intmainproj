const mongoose=require('mongoose')
const validators=require('validator')

const wishSchema=new mongoose.Schema({
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
    }
})

const wishes=mongoose.model('wishes',wishSchema)
module.exports=wishes