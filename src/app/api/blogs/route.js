import { NextResponse } from "next/server"
import { connect } from "../../../utils/db"
import Blog from '../../../models/Blog'

export const GET = async (request) => {
    try{
        await connect()
        const blogs = await Blog.find()
        return new NextResponse(JSON.stringify(blogs), {status:200})
    }catch(err){
        return new NextResponse(err, {status:500})
    }
}