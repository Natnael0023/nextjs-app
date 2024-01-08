import mongoose from 'mongoose'

export const connect = async () =>{
    await mongoose.connect('mongodb://localhost:27017/nextjs')
    // await mongoose.connect("mongodb+srv://nat:UuBipGkinU0eTTTe@cluster0.dnpbcwb.mongodb.net/next",  {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     socketTimeoutMS: 30000
    //   })
    .then(res=>{
        console.log('*** MONGODB CONNECTED ***')
    })
    .catch(error=>console.log(error))
}