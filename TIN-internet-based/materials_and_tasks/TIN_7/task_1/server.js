const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === "/submit" && req.method === "POST") {
    // Handle form submission
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      // Send response with submitted data
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Submitted Data</title>
        </head>
        <body>
          <h1>Submitted Data</h1>
          <p>Data: ${data}</p>
        </body>
      </head>
      `);
      res.end();
    });
  } else {
    // Serve form page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(require("fs").readFileSync("./form.html"));
    res.end();
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
