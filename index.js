require('dotenv').config()
const express = require ('express')
const mongoose = require ('mongoose')
const router = require ("./router/router.js");
const fileupload = require("express-fileupload")

const PORT = process.env.PORT || 3000;
const DB_URL=process.env.DB_URL


const app = express()

app.use(express.json())
app.use(fileupload({}))
app.use('/api',router)

async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, ()=> console.log(`Шарманка пашет: http://localhost:`+PORT))
    }catch (e){
        console.log(e)
    }
}

startApp()