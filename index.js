require('dotenv').config()
const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('public'));
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));


const string = process.env.MONGO_URI
mongoose.connect(string)

const database = mongoose.connection
database.on('error:', error=>{
    console.log(error)
})
database.once('connected',()=>{
    console.log("Database Connected")
})

app.listen(PORT, (req,res)=>{
    console.log(`Server listening on port ${PORT}`)
})
