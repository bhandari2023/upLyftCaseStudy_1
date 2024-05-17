const express = require('express');

const dotenv= require('dotenv');
 require('./util/dbconnect')

dotenv.config();
const PORT= process.env.PORT;
const app= express();
// read json data

app.use(express.json());

app.use("/api/v1/user",require('./routes/user.route'));


app.listen(PORT, ()=>{
    console.log(`application is running on ${PORT} 1`);
})