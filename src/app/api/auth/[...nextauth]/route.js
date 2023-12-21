import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import { connect } from "../../../../utils/db";
import Users from "../../../../models/UserModel";
import bcrypt from 'bcrypt'
import CredentialsProvider  from "next-auth/providers/credentials";
import { error } from "console";

const handler =  NextAuth({
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name:'credentials',
            async authorize(credentials){
                await connect()
                try{
                    const user = await Users.findOne({username: credentials.username})
                    if(!user){
                        throw new Error('no user with this username')
                    }
                    const passMatch = await bcrypt.compare(credentials.password,user.password)
                    if(!passMatch){
                        throw new Error('Incorrect password')
                    }
                    return user
                }catch(err){
                    throw new Error(err)
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    pages: {
        error:'/dashboard/login'
    }
})

export { handler as GET, handler as POST };
