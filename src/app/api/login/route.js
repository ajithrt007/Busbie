import { NextResponse } from "next/server";

export async function GET(request) {
  var user
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  const password = url.searchParams.get("password");
  const client = url.searchParams.get("client");
  try {
    user = client.db("busbieData").collection("user");
    var credentials =  user.findOne({ username: password });
    if (user) {
      return NextResponse.json({ authorized: user });
    } else {
      return NextResponse.json({ authorized: user });
    }
  } catch (error) {
    return NextResponse.json({ authorized: "Error Occurred" });
  }
}

