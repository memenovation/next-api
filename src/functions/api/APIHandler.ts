/*
  Handler wrapper for apis
*/

export const apiHandler = (handler) => {
  return async (req, res) => {
    try {
      // route handler
      await handler(req, res);
    } catch (err) {
      // default error handler
      errorHandler(err, res);
    }
  };
};

//define global error handling middleware
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
