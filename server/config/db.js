const mongoose = require('mongoose')

require('dotenv').config


const connectDB = async() =>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
  console.log(`Mongo connected`)
  }
  catch(err){
    console.log(`error in connecting db:${err.message}`)
  }
}

module.exports = connectDB