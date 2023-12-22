import { NextRequest, NextResponse } from "next/server"
import { connect } from "../../../../utils/db"
import Blog from '../../../../models/Blog'
import { json } from "stream/consumers"

export const GET = async (request:NextRequest, {params}) => {
    const {id} = params
    try{
        await connect()
        const blog = await Blog.findById(id)
        if(!blog){
            return new NextResponse(JSON.stringify('blog not found'),{status:404})
        }
        return new NextResponse(JSON.stringify(blog), {status:200})
    }catch(err){
        return new NextResponse(err, {status:500})
    }
}

export const DELETE = async(request: NextRequest, {params})=>{
    const {id} = params
    try{
        await connect()
        const blog = await Blog.findByIdAndDelete(id)
        if(!blog){
            return new NextResponse(JSON.stringify('blog not found'),{status:404})
        }
        return new NextResponse(JSON.stringify('blog deleted'),{status:201})
    }catch(err){
        return new NextResponse(JSON.stringify(err),{status:500})
    }
}