import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

export async function GET(request) {
  var user
  const url = new URL(request.url);
  const iusername = url.searchParams.get("username");
  const ipassword = url.searchParams.get("password");
  console.log(iusername,ipassword)
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  // Send a ping to confirm a successful connection
  try {
    await client.db("admin").command({ ping: 1 });
    console.log(  
      "Pinged your deployment.Successfully connected to MongoDB!"
    );
    user = await client.db("busbieData").collection("user").findOne({ username: iusername, password: ipassword })
    console.log(user)
    if (user != null) {
      return NextResponse.json({ authorized: true });
    } else {
      return NextResponse.json({ authorized: false });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ authorized: "Error Occurred" });
  }
}