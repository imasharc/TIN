const { equal } = require("assert");
const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;
var num1, params, equalSign;
var current_url = new URL(`http://${hostname}:${port}`);
var queryString;

const server = http.createServer((req, res) => {
  // queryString = url.parse(req.url).searchParams;
  queryString = new URLSearchParams(req.url);
  params = queryString.toString();
  indexOfNum1 = params.indexOf("num1=");
  indexOfNum2 = params.indexOf("num2=");
  indexOfOp = params.indexOf("op=");
  num1 = params.substring(indexOfNum1 + 5, indexOfNum2 - 1);
  num2 = params.substring(indexOfNum2 + 5, indexOfOp - 1);
  op = params.substring(indexOfOp + 3, params.length);
  console.log("href: " + queryString);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello World, ${params} => num1=${num1} num2=${num2} op=${op}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${current_url}`);
});
