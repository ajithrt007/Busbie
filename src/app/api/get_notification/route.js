import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

export async function GET(request) {
  const url = new URL(request.url);
  const skipVal = Number(url.searchParams.get("skipVal"));
  console.log(skipVal);
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
    console.log("Successfully connected to MongoDB!");
    var notif = await client
      .db("busbieData")
      .collection("notif2")
      .find()
      .toArray();
    // console.log(notif)
    if (notif != null) {
      await client.close();
      return NextResponse.json(notif);
    } else {
      return NextResponse.json(false);
    }
  } catch (error) {
    console.log(error);
    await client.close();
    return NextResponse.json(error);
  }
}
