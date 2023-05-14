import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, hostname, pathname } = new URL(request.url);

  return NextResponse.json({ result: "inactive endpoint" });
}
