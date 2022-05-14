import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

//functions
import { apiHandler } from "@functions/api/APIHandler";

//types
import { UpdatedNextApiRequest } from "@Types/index";

//api handler to wrap all endpoints
export default apiHandler(handler);

/*
  This route is not defined as active in src/configs/ActiveEndpoints.ts, 
  so when calling this endpoint, it will throw an error and return a 500 error.
*/
async function handler(req: UpdatedNextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "POST", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  /* ------------------- check if request method is correct ------------------- */
  if (req.method !== "GET") {
    res.status(400).json({ error: "Invalid Request" });
    return;
  }

  res.status(200).json({ name: "Inactive" });
}
