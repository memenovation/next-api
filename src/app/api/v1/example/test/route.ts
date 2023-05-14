import { NextResponse } from "next/server";
import { Logger } from "@/configs/console";

const logger = new Logger("Test API Route");

export async function GET(request: Request) {
  const urlobj = new URL(request.url);
  const { searchParams, hostname, pathname } = new URL(request.url);
  const id = searchParams.get("id");

  // console.log("urlobj: ", urlobj);
  logger.log("data", urlobj);
  logger.log("info", `id: ${id}`);
  logger.log("info", `hostname: ${hostname}`);
  logger.log("info", `pathname: ${pathname}`);
  return NextResponse.json({ result: id });
}
