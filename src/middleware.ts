import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ActiveEndpoints } from "@configs/ActiveEndpoints";

import { Logger } from "@configs/console";

export const config = {
  matcher: "/api/:path*",
};

const logger = new Logger("Middleware");

export function middleware(req: NextRequest) {
  /* 1. Check if the endpoint is active or not */
  const requestURL = req.nextUrl.pathname;
  const endpoint = ActiveEndpoints.find(
    (endpoint) => endpoint.endpoint === requestURL
  );
  //if endpoint is not found or inactive, return 501
  if (!endpoint?.active) {
    logger.log("error", "Endpoint not found");
    return errorHandler(501, "Endpoint not found");
  }

  /* 2. Check if the request is authorized or not */
  if (!endpoint?.isPublic) {
    logger.log("info", "Request requires authorization");
    const authorization = req.headers.get("Authorization");
    //if authorization header is not found or invalid, return 401
    if (
      !authorization ||
      authorization !== `Bearer ${process.env.AUTH_TOKEN}`
    ) {
      logger.log("error", "Request not authorized");

      return errorHandler(401, "Not Authorized");
    }
  }

  /* 3. If the endpoint is active and authorized, return next() */
  return NextResponse.next();
}

function errorHandler(statusCode: number, message: string) {
  return new NextResponse(
    JSON.stringify({ success: false, message: message }),
    { status: statusCode, headers: { "content-type": "application/json" } }
  );
}
