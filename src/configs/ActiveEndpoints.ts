/*
  Controls the active endpoints of the application. 
*/

//nextjs middleware will check this array to see if the endpoint is active or not
//active:false will make the endpoint inactive

import type { ActiveEndpoint } from "@Types/generic";

export const ActiveEndpoints: ActiveEndpoint[] = [
  {
    name: "test",
    purpose: "test",
    endpoint: "/api/v1/example/test",
    active: true,
    isPublic: false,
  },
  {
    name: "inactive",
    purpose: "Inactive endpoint example",
    endpoint: "/api/v1/example/inactive",
    active: false,
    isPublic: true,
  },
];
