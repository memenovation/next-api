import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, hostname, pathname } = new URL(request.url);
  const id = searchParams.get("id");
  console.log("id", id);
  console.log("hostname", hostname);
  console.log("pathname", pathname);
  return NextResponse.json({ result: id });
}
