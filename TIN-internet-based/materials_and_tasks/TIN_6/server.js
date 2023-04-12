const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;
var current_url = new URL(`http://${hostname}:${port}`);

const server = http.createServer((req, res) => {
  var queryString = new URLSearchParams(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(getParamsValue(queryString, "num1", "num2", "="));
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${current_url}`);
});

function getParamsValue(queryString, param1, param2, operation) {
  var params = queryString.toString();
  indexOfParam1 = params.indexOf(param1);
  indexOfParam2 = params.indexOf(param2);
  indexOfOperation = params.lastIndexOf(operation);
  num1 = params.substring(
    indexOfParam1 + param1.length + 1,
    params.indexOf("&")
  );
  num2 = params.substring(
    indexOfParam2 + param2.length + 1,
    params.lastIndexOf("&")
  );
  op = params.substring(indexOfOperation + 1, params.length);
  var res = calculateParamsValue(num1, num2, op);
  return `num1=${num1} num2=${num2} op=${op} res=${res}`;
}

function calculateParamsValue(param1, param2, operation) {
  switch (operation.toLowerCase()) {
    case "add":
      return parseInt(param1) + parseInt(param2);
    case "sub":
      return parseInt(param1) - parseInt(param2);
    case "subtract":
      return parseInt(param1) - parseInt(param2);
    case "mul":
      return parseInt(param1) * parseInt(param2);
    case "multiply":
      return parseInt(param1) * parseInt(param2);
    case "div":
      return parseInt(param1) / parseInt(param2);
    case "divide":
      return parseInt(param1) / parseInt(param2);
    default:
      // throw new Error("Invalid parameter detected!");
      console.error("Invalid parameter detected!");
  }
}
