import type { NextApiRequest, NextApiResponse } from "next";

export interface UpdatedNextApiRequest extends NextApiRequest {
  method: "GET" | "HEAD" | "PUT" | "POST" | "OPTIONS";
  headers: any;
}
