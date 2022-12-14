/*
  Handler wrapper for apis
*/

import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

type Methods = "GET" | "POST" | "PUT" | "DELETE";

export const apiHandler = (
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<any>,
  allowedMethods: Methods[]
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    //next-cors config
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "POST", "OPTIONS"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    //check if method is allowed
    if (!allowedMethods.includes(req.method as Methods))
      errorHandler({ code: 405, message: "Method not allowed" }, res);
    try {
      // route handler
      await handler(req, res);
    } catch (err: any) {
      // default error handler
      console.log("err", err);
      errorHandler(err, res);
    }
  };
};

//define global error handling middleware
export const errorHandler = (err: any, res: NextApiResponse) => {
  const code = err.code || 500;
  const message = err.message || err || "Internal Server Error";
  return res.status(code).json({ message: message });
};

//define global error throwing middleware
export const errorThrower = (code: number, message: string) => {
  const error: any = new Error(message);
  error.code = code;
  throw error;
};
