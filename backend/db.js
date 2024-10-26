const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB DataBase ${mongoose.connection.host}` .bgMagenta.white)
    } catch (error) {
        console.log(`MongoDB connect Error ${error}` .bgRed.white)
    }
}

module.exports = connectDB;