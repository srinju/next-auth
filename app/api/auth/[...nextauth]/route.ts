
/* with nextauth mentioned below after this commented part
import { NextRequest, NextResponse } from "next/server";

//basically we can see from the 100xdevs website when we visit any course then it can go deeper and deeper we can go like courses/1/2/3 so on and so on so the question is how we can access this dynamic routes we can do this as shown below once seen i can understand that 
//this means if i go in localhost:3000/api/auth/asd/asd/asda/as/das/da/sd then it will always show the message : asdasd this[...asdsd] means catch all routes

export function GET(req : NextRequest , { params : { authRoutes } }: {
    params : {
        authRoutes : string[] //what ever we did with the params here give me the auth routes the user is trying to access
    }
}) { 
    console.log(authRoutes);
    return NextResponse.json({
        message : "asdasd"
    });
};
*/

//see we dont have to write all the res.cookie code and we have to import the next-auth lib
//and do the credentials provider logic and next auth takes care of the auth that is sets cookies too

import { NEXT_AUTH } from "@/app/lib/auth";
import nextAuth from "next-auth";

//with nextauth>>

const handler = nextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
