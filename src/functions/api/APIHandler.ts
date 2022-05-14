/*
  Handler wrapper for apis
*/

import { ActiveEndpoints } from "@configs/ActiveEndpoints";

export const apiHandler = (handler) => {
  return async (req, res) => {
    try {
      // global middleware
      await defaultMiddleware(req, res);
      // route handler
      await handler(req, res);
    } catch (err) {
      // default error handler
      errorHandler(err, res);
    }
  };
};

//define error handling middleware
export const errorHandler = (err, res) => {
  if (typeof err === "string") {
    // custom application error
    return res.status(400).json({ message: err });
  }

  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Invalid Token" });
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message });
};

//define default middleware to check if endpoint should be active
export const defaultMiddleware = async (req, res) => {
  const requestURL = req.url;
  //check if requestURL is defined in the ActiveEndpoints list and active
  if (
    !ActiveEndpoints.some(
      (endpoint) => endpoint.endpoint === requestURL && endpoint.active
    )
  ) {
    throw new Error("Endpoint not active");
  }

  return;
};
