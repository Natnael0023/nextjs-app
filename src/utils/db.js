import mongoose from 'mongoose'

export const connect = async () =>{
    await mongoose.connect('mongodb://localhost:27017/nextjs') 
    // await mongoose.connect("mongodb+srv://natt:oTNArxE7XLedLxBP@cluster0.ulymyqy.mongodb.net/nextjs?retryWrites=true&w=majority",  {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    //   })
    .then(res=>{
        console.log('*** MONGODB CONNECTED ***')
    })
    .catch(error=>console.log(error))
}