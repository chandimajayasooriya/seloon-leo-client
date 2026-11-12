import { NextResponse } from "next/server";

export async function GET(req){

return NextResponse.json({

    message :"get requset received into /api/products"
})

}
