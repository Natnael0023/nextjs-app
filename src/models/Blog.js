import mongoose from 'mongoose'

const {Schema} = mongoose

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    email: {
        type: String,
        required: true
    }
},{timestamps:true})

let Blog
try {
  Blog = mongoose.model('Blog')
} catch (error) {
  Blog = mongoose.model('Blog', blogSchema)
}
export default Blog