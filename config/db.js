const { default: mongoose } = require("mongoose")

let connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("mongodb connected");
        
    } catch (error) {
        console.log("Error in db",error);
            }
}

module.exports = connectDB;