const mongoose=require('mongoose')
const dbconnect=async()=>{
    try {
       await mongoose.connect(process.env.DBURL)
        console.log(" DB Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbconnect;