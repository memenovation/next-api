import type { NextApiRequest, NextApiResponse } from "next";

//functions
import { apiHandler, errorThrower } from "@functions/api/APIHandler";

//api handler to wrap all endpoints
export default apiHandler(handler, ["GET"]);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query?.name != "John Doe") {
    errorThrower(400, "Name is not John Doe");
  }

  res.status(200).json({ message: "Hello John Doe" });
}
