const users=require('../Model/userSchema')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log("Inside Register Function")
    const { username, address, email,password } = req.body
    console.log(`Username:${username},Address:${address},Email:${email},Password:${password}`)
    try {
        const excistingUser = await users.findOne({ email })
        console.log(excistingUser)
        if (excistingUser) {
            res.status(406).json("Excisting User..Please Try again!!")
        }
        else {
            const newUser = new users({ username,address,email,password})
            await newUser.save()
            res.status(200).json(newUser)

        }

    }
    catch (err) {
        res.status(401).json("Something Went Wrong," + err)
    }

}



exports.login = async (req, res) => {
    console.log("inside login function!")
    const { email, password} = req.body

    try {
        const excistingUser = await users.findOne({ email, password})
        if (excistingUser && excistingUser.isAdmin==true) {
           const token =jwt.sign({ userId: excistingUser._id }, "secretid")
            console.log(excistingUser)
            res.status(200).json({
                excistingUser,
                role: "admin",
                token
            })


        }
        else if(excistingUser){
            const token =jwt.sign({ userId: excistingUser._id }, "secretid")
            console.log(excistingUser)
            res.status(200).json({
                excistingUser,
                role: "user",
                token
            })
        }
    
        else {
            res.status(406).json("Invalid Email/Password!!")
        }
    }
    catch (err) {
        res.status(500).json("Something Went Wrong!!" + err)
    }
}

exports.allusers = async (req,res)=>{
    console.log("Inside userslist")
    // res.send("userslist")
    console.log(req.payload)
    try {
        const data = await users.find({isAdmin:false})
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
    }
}


exports.userdel = async (req, res) => {
    console.log("Inside userdelete")
    // res.send("userslist")
    const {id}=req.params
    try {
        const data = await users.findByIdAndDelete({_id:id})
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
    }
 }
