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
    var employees = await client
      .db("busbieData")
      .collection("employee")
      .find()
      .skip(skipVal)
      // .limit()
      .sort({ Name: 1 })
      .toArray();
    // console.log(employees)
    if (employees != null) {
      await client.close();
      return NextResponse.json(employees);
    } else {
      return NextResponse.json(false);
    }
  } catch (error) {
    console.log(error);
    await client.close();
    return NextResponse.json(error);
  }
}
