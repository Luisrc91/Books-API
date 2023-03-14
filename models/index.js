require ('dotenv').config()
const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
//   }).then(() => {
//     console.log('connected to mongo: ', process.env.MONGO_URI);
//   }).catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });

  mongoose.connect( 
    process.env.MONGO_URI,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },
    ()=> {
        console.log('conneted to mongo: ', process.env.MONGO_URI )
    })
//   })
//   .then(() => {
//     console.log('connected to mongo: ', process.env.MONGO_URI);
//   }).catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });


module.exports.Book = require('./books')
// module.exports.Comment = require('./comment')