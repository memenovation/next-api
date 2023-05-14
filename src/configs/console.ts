//build a console.log wrapper that does the following:
// 1. accept a definition of the log location (e.g. "middleware", "route")
// 2. accept a definition of the log tpye (e.g. "info", "error", "warn")
// 3. accept a definition of the log message (e.g. "endpoint not found")

// 4. log the message to the console with the following format:
// [log location]-[log type]: [log message]

// 5. run the console.log

// allow the log location to be defined once and reused for multiple logs

export class Logger {
  private location: string;

  constructor(location: string) {
    this.location = location;
  }

  //allow for logging objects/arrays as well as strings
  //if the type is error, make the console.log red
  //if the type is info, make the console.log blue

  log(type: "info" | "error" | "data", message: string | object | Array<any>) {
    let color = "";
    switch (type) {
      case "info":
        color = "\x1b[34m";
        break;
      case "error":
        color = "\x1b[31m";
        break;
      case "data":
        color = "\x1b[32m";
        break;
    }

    const boldColor = "\x1b[1m" + color;

    //if the message is an object or array, log it as is
    if (typeof message === "object") {
      console.log(`${boldColor}[${type}]\x1b[0m-[${this.location}]:`, message);
      return;
    }

    //color the type of log as well
    console.log(
      `${boldColor}[${type}]\x1b[0m-[${this.location}]: ${color}${message}\x1b[0m`
    );
  }
}
