import { NextRequest, NextResponse } from "next/server";
import Users from "../../../../models/UserModel";
import { connect } from "../../../../utils/db"
import bcrypt from 'bcrypt'

export const POST = async(req:NextRequest)=>{
    if(req.method != 'POST'){
        return new NextResponse(JSON.stringify({message:'Method not allowed'}),{status:405})
    }
    try{
        await connect()
        let {username, password} = await req.json()
        console.log(username, password)
        const user = await Users.findOne({username})
        if(!user){
            return new NextResponse(JSON.stringify({message: 'no user with this username'}),{status:404})
        }
        let passMatch = await bcrypt.compare(password,user.password)
        if(!passMatch){
            return new NextResponse(JSON.stringify({message:'Incorrect Password'}),{status:401})
        }
        return new NextResponse(JSON.stringify({message:'login success'}))
    }catch(err){
        return new NextResponse(JSON.stringify({err}))
    }
}