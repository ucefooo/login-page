import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";

const userSchema = z
.object({
    username: z.string().min(1,'Username is required').max(30),
    email: z.string().min(1,'Email is required').email('Invalid Email'),
    password: z.string().min(1,'Password is required').min(8,'Password must have more than 8 characters'),
})


export async function POST(req:Request) {
    try {
        const body = await req.json();
        const {email,username,password} = userSchema.parse(body);
         
        const existingUser = await db.user.findUnique({
            where: {
                email:email
            }
        });
        if (existingUser) {
            return NextResponse.json({
                user: null,
                message: "User already exists WITH EMAIL"
            },{status: 409});
        }
        const existingUserByUsername = await db.user.findUnique({
            where: {
                email:email
            }
        });
        if (existingUserByUsername) {
            return NextResponse.json({
                user: null,
                message: "User already exists WITH USERNAME"
            },{ status: 409 });
        }
        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                email: email,
                username: username,
                password: hashedPassword
            }
        });
        const {password:newUserPassword, ...rest} = newUser;
        return NextResponse.json({user: rest, message: "User created successfully"},{status: 201});
    } catch (error) {
        const  typeError = error as z.ZodError;
        return NextResponse.json({message: "here " + typeError.message},{status: 500});
    }
}
