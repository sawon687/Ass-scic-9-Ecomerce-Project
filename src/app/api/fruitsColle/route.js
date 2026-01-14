import { connect } from "@/lib/dbconect";



   const fruitscoll=connect('fruitsColl') 
export async function POST(req) {

     const fruitsInfo=await req.json();
     const result=await fruitscoll.insertOne(fruitsInfo)

     return Response.json(result)
}


export async function GET(req) {

    const  result = await fruitscoll.find().toArray()
   
    return Response.json(result)
    
}