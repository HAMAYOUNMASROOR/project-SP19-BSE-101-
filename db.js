const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://hamayoun:password786@cluster0.732kd.mongodb.net/BMWcar-Udemy' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose