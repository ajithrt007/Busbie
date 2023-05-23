//api/issues
import {NextResponse} from "next/server" 
export async function GET(request){
    const issue={
        name:"issue test",
        type:"Bus Breakdown",
        details:["Trivandrum","123-1231-12313-212"],
        url:"https://google.com/"
    }

    return NextResponse.json({issue});
}