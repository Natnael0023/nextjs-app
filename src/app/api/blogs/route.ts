import { NextRequest, NextResponse } from "next/server"
import { connect } from "../../../utils/db"
import Blog from '../../../models/Blog'
import { json } from "stream/consumers"

export const GET = async (request:NextRequest) => {
    const url = new URL(request.url)
    const email = url.searchParams.get('email')
    try{
        await connect()
        const blogs = await Blog.find(email && {email})
        return new NextResponse(JSON.stringify({blogs:blogs}), {status:200})
    }catch(err){
        return new NextResponse(err, {status:500})
    }
}

export const POST = async (request:NextRequest) => {
    if(request.method !== 'POST'){
        return new NextResponse(JSON.stringify({message: 'Method Not allowed'}),{status:405})
    }
    let {title, body, email} = await request.json()
    if(title =="" || body == "" || email ==""){
        return new NextResponse(JSON.stringify({message:'All fields are required'}),{status:400})
    }
    try{
        await connect()
        let blog = new Blog({title,body,email})
        blog = await blog.save()
        return new NextResponse(blog)
    }catch(err){
        return new NextResponse(err)
    }
}