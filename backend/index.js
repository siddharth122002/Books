const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes')
const app = express();
const dotenv = require('dotenv');
dotenv.config({
    path:'./.env'
})

app.use(express.json());
app.use(cors());

        
const fn=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db Connected bookstore")
    }catch(err){
        console.log("ERR:",err);
    }
}
fn();

app.use('/books', router);

app.listen(process.env.PORT,()=>{
    // console.log(process.env.PORT)
    console.log("listening");
})
