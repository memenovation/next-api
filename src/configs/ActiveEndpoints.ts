/*
  Controlls the active endpoints for the application.
*/

//endpoints not defined here will throw an error when calling the endpoint
//active:false will make the endpoint inactive

export const ActiveEndpoints = [
  {
    name: "hello",
    purpose: "Say Hello",
    endpoint: "/api/v1/example/hello",
    active: true,
  },
  {
    name: "inactive",
    purpose: "Inactive endpoint example",
    endpoint: "/api/v1/example/inactive",
    active: false,
  },
];
