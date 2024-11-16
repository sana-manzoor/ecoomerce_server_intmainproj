const orders=require('../Model/orderSchema')

exports.addOrders=async(req,res)=>{
    console.log("Inside addorders Function!!")
  
    const {oid,uname,uid,amount,status}=req.body
    console.log(`${oid},${uname},${uid},${amount},${status}`)
    try{
        const excistingOrder=await orders.findOne({oid})
        if(excistingOrder){
            res.status(406).json("Excisting order")
        }
        else{
            const newOrder=new orders({oid,uname,uid,amount,status})
            await newOrder.save()
            res.status(200).json(newOrder)
        }
    }
    catch(err){
        res.status(401).json("Something Went Wrong!! " + err)
    }
}
