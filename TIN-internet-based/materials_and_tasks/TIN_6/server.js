const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3001;
var queryString = "";
var current_url = new URL(`http://${hostname}:${port}`);

const server = http.createServer((req, res) => {
  queryString = url.parse(req.url, true);
  console.log("href: " + queryString.search);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello World, ${queryString.search}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${current_url}`);
});
