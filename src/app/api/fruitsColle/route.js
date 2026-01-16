import { connect } from "@/lib/dbconect";



   const fruitscoll=connect('fruitsColl') 
export async function POST(req) {

     const fruitsInfo=await req.json();
     const result=await fruitscoll.insertOne(fruitsInfo)

     return Response.json(result)
}


export async function GET(req) {

     const {searchParams}=new URL(req.url)

     console.log('searchParam',searchParams)
     const type=searchParams.get('type')

    let query={}
     if(type==='organic')
     {
        query={isOrganic:true}
     }

    const  result = await fruitscoll.find(query).toArray()
   
    return Response.json(result)
    
}