import { connect } from "@/lib/dbconect";



   
export async function POST(req) {
 const fruitscoll= await connect('fruitsColl')
     const fruitsInfo=await req.json();
     const result=await fruitscoll.insertOne(fruitsInfo)

     return Response.json(result)
}