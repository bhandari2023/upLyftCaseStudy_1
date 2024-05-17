const mongoose = require ('mongoose');
const dotenv = require('dotenv').config();



mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log(`MongoDB connected`))
.catch((err)=>console.log("error", err))

