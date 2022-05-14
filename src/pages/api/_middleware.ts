import { NextRequest, NextResponse } from "next/server";
import { ActiveEndpoints } from "@configs/ActiveEndpoints";

export function middleware(req: NextRequest) {
  // check if endpoint is defined as active
  const requestURL = req?.page?.name;
  if (
    !ActiveEndpoints.some(
      (endpoint) => endpoint.endpoint === requestURL && endpoint.active
    )
  ) {
    return errorHandler(500, "Endpoint not active");
  }
  return NextResponse.next();
}

function errorHandler(statusCode: number, message: string) {
  return new Response(JSON.stringify({ message: message }), {
    status: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
