const products=require('../Model/productSchema')

exports.addProducts=async(req,res)=>{
    console.log("Inside addproducts Function!!")
    console.log(req.file.filename)
    const {title,price,category,description,userid}=req.body
    console.log(`${title},${price},${category},${description},${userid}`)
    const product_image=req.file.filename
    // res.send("Addprojects request is hit!!")
    try{
        const excistingProduct=await products.findOne({description})
        if(excistingProduct){
            res.status(406).json("Excisting product")
        }
        else{
            const newProduct=new products({title,price,category,description,product_image,userid})
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    }
    catch(err){
        res.status(401).json("Something Went Wrong!! " + err)
    }
}


exports.allproduct = async (req, res) => {
    console.log("Inside productlist")
    // res.send("userslist")
    console.log(req.payload)
    try {
        const data = await products.find()
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
    }
 }

 
exports.proddel = async (req, res) => {
    console.log("Inside proddelete")
    // res.send("userslist")
    const {id}=req.params
    try {
        const data = await products.findByIdAndDelete({_id:id})
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
    }
 }

 exports.editProduct = async (req, res) => {
    const {title,price,category,description,userid}=req.body
    console.log(req.body)
    const uploadedFile=req.file?req.file.filename:req.body.product_image
    const {id}=req.params
    try{
      console.log("inside edit")
      const result=await products.findByIdAndUpdate({_id:id},{title,price,category,description,product_image:uploadedFile,userid})
      console.log(result)
      res.status(200).json(result)
    }
    catch(err){
        console.log(err)
      res.status(401).json(err)
    }
    //  res.send(`${title},${price},${uploadedFile},${id}`)
  }

  exports.getcategory = async (req,res)=>{
    const {id}=req.params
    try{
        console.log("inside viewbook")
        const result=await products.find({category:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.viewproduct = async (req,res)=>{
    const {id}=req.params
    try{
        console.log("inside productview")
        const result=await products.find({_id:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.filterlow = async (req,res)=>{
  
    try{
        console.log("inside product filter")
        const result=await products.find().sort({ price: 1 })
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}


