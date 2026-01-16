import { ObjectId } from "mongodb";
import { connect } from "@/lib/dbconect";
 const fruitsColl =connect("fruitsColl");
export async function GET(req,{params }) {
  const { id } = await params;     
  const result = await fruitsColl.findOne({
    _id: new ObjectId(id),
  });

  return Response.json(result);
}

