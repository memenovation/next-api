import type { NextApiRequest, NextApiResponse } from "next";
//functions
import { apiHandler } from "@functions/api/APIHandler";

//api handler to wrap all endpoints
export default apiHandler(handler, ["GET"]);

/*
  This route is not added as an endpoint in src/configs/ActiveEndpoints.ts, 
  so when calling this endpoint, it will throw an error and return a 500 error.
*/
async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "Inactive" });
}
