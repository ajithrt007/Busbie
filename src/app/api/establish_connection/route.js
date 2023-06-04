import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

export async function GET() {
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
    return NextResponse.json({ status: 1 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "Error:" + error });
  }
}

// export async function GET() {  
//   console.log("Api fetched")
//   const client = new MongoClient(process.env.MONGODB_URI, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   try {
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment.Successfully connected to MongoDB!"
//     );
//     return NextResponse.json(client);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ status: "Error:" + error });
//   }
// }