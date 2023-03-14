// Dependencies
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI,
     {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, 
    () => {'connected to mongo: ', process.env.MONGO_URI}
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// controller
const bookController = require("./controllers/book_controller")
app.use('/books')


// Listen
app.listen(PORT, () => {
    console.log( 'Im Alive')
})