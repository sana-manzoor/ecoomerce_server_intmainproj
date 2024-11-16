require('dotenv').config()

const express=require('express')

const Stripe = require('stripe');

const cors=require('cors')

const eserver=express()

eserver.use(cors())

eserver.use(express.json())

const router=require('./Routes/Routes')

require('./dbConnection/connection')

// import middleware
// const middleware=require('./Middleware/jwtMiddlewares')
// const middleware=require('./Middlewares/foodMiddleware')

// eserver.use(middleware)

eserver.use(router)

const stripe = Stripe('sk_test_51PjcIrGvWCRuSvdqYZTLLmLL6Gta1Tcs2c2GCS2L0tCfLIkp51QQPVwjeWhdJtFxNth1wM0cXb0cryM9kqJUOV9I00f2ljjFxG'); // Replace with your Stripe secret key


const PORT=4000 || process.env.PORT

//serving upload files
eserver.use('/upload',express.static('./uploads'))

eserver.listen(PORT,()=>{
    console.log(`Server is started at ${PORT}`)
})

eserver.get('/',(req,res)=>{
    res.send("<h1>Server is running successfully!! </h1>")
})

eserver.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
  
    if (!amount || typeof amount !== 'number') {
      return res.status(400).json({ error: 'Invalid amount' });
    }
  
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'inr',
      });
  
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).json({ error: error.message });
     
    }
  });