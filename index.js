// import the server from the file we declared it in
import { server } from "./server.js";
// set a port variable
const port = 8000;
// use the server and its listen method to "listen" for requests at the given port
server.listen(port, () => {
  // pass a callback function to e.g. log server running
  console.log(`Server running at http://localhost:${port}`);
});
