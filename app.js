const http = require("http");
const routes = require("./routes");

// const reqListener =

console.log(routes.text);

const server = http.createServer(routes.handler);

server.listen(8000);
