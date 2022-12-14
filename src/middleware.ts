import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ActiveEndpoints } from "@configs/ActiveEndpoints";

export const config = {
  matcher: "/api/:path*",
};

export function middleware(req: NextRequest) {
  //basic api key auth headers implementation
  const authorization = req.headers.get("Authorization");
  if (!authorization || authorization !== `Bearer ${process.env.AUTH_TOKEN}`) {
    return errorHandler(401, "Not Authorized");
  }
  // check if endpoint is defined as active
  const requestURL = req.nextUrl.pathname;
  console.log("requestURL", requestURL);

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
  return new NextResponse(
    JSON.stringify({ success: false, message: message }),
    { status: statusCode, headers: { "content-type": "application/json" } }
  );
}
