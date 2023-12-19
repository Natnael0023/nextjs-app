import { NextResponse } from "next/server"
import { connect } from "../../../../utils/db"
import Blog from '../../../../models/Blog'

export const GET = async (request, {params}) => {
    const {id} = params
    try{
        await connect()
        const blog = await Blog.findById(id)
        return new NextResponse(JSON.stringify(blog), {status:200})
    }catch(err){
        return new NextResponse(err, {status:500})
    }
}