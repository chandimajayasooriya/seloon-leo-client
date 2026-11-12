import { NextResponse } from "next/server";

export function GET(){
    console.log("get request received")
}

export async function POST(req){

    const body = await req.json()
    
    const message = "good morning "+body.designation+""+body.student+"welcome to the "+body.subject+ "class "
    console.log(message);

    return NextResponse.json(
        {welcomeNote : message}
    
    )
}