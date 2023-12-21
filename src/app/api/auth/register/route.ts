import { NextRequest, NextResponse } from "next/server"
import User from "../../../../models/UserModel"
import { connect } from "../../../../utils/db"
import bcrypt from 'bcrypt'

const hashPassword = async (password:string) => {
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(10, (err,salt)=>{
            if(err){
                reject(err)
            }
            else{
                bcrypt.hash(password,salt,(err, hash)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(hash)
                    }
                })
            }
        })
    })
}

export const POST = async (req:NextRequest)=>{
    if(req.method != 'POST'){
         return new NextResponse(JSON.stringify({message:'json_response'}), {
            status: 405,
            headers:{'Content-Type':'application/json'},
         })
    }
    try{
        await connect()
        let {username, email, password} = await req.json()
        const userExist = await User.findOne({email})
        if(userExist){
            return new NextResponse(JSON.stringify({message:'User already exists'}), {
                status: 400,
                headers:{'Content-Type':'application/json'},
             })
        }
        const usernameTaken = await User.findOne({username})
        if(usernameTaken){
            return new NextResponse(JSON.stringify({message:'the username is taken'}), {
                status: 400,
                headers:{'Content-Type':'application/json'},
             })
        }
        // password = await hashPassword(password)
        password = await bcrypt.hash(password,10)
        let newUser = new User({username,email,password})
        newUser = await newUser.save()
        return new NextResponse(JSON.stringify({newUser}), {
            status: 201,
            headers:{'Content-Type':'application/json'},
         })
    }catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify(err), {
            status: 500,
         })
    }
    // const {username} = await req.json()
    // return NextResponse.json(username)
}

