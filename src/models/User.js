import mongoose from 'mongoose'

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps:true})

let User
try{
    User = mongoose.model('User')
}catch(error){
    User = mongoose.model('User',userSchema)
}
export default User