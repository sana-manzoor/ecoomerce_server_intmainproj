// const stripe=require('../config/stripe')


// const paymentController=async(req,res)=>{
//     try{
//         const {cartItems}=req.body
        
//         const params={
//             submit_type:'pay',
//             mode:'payment',
//             payment_method_types:['card'],
//             billing_address_collection: 'auto',
//             shipping_options:[
//                 {
//                     shipping_rate:'shr_1Pl4ZdGvWCRuSvdq2BEsHhH2'
//                 }
//             ],
//             line_items:cartItems

//         }
//         const session = await stripe.checkout.sessions.create(params)
//           res.status(303).json(session) 

//     }
//     catch(err){
//         res.status(401).json(err)
//     }
// }