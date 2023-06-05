// import the createServer method from the http package of node.js (built-in in node.js, no need to install anything)
import { createServer } from "node:http";
// create our server with a callback function as argument, having request and response as parameters
export const server = createServer((request, response) => {
  // we check for the request.url value to deliver a specific response for each "route"
  if (request.url === "/hello") {
    // set the status code to OK
    response.statusCode = 200;
    // deliver content via response.end() method
    response.end("Hello world");
  } else if (request.url === "/bye") {
    response.statusCode = 200;
    response.end("Bye World");
  } else if (request.url === "/answer") {
    response.statusCode = 200;
    response.end("42");
  } else {
    // for all other request urls, we deliver an error status code
    response.statusCode = 404;
    response.end("Not Found");
  }
});
