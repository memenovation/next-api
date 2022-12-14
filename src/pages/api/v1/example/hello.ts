import type { NextApiRequest, NextApiResponse } from "next";

//functions
import { apiHandler, errorThrower } from "@functions/api/APIHandler";

import { helloSchema } from "@configs/schema";

//api handler to wrap all endpoints
export default apiHandler(handler, ["GET", "POST"], helloSchema);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Hello John Doe" });
}
