const mongoose=require('mongoose')
const validate=require('validator')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validate.isEmail,'Invalid Email']
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    }
}) 

const users=mongoose.model('users',userSchema)

module.exports=users