const http = require("http");
const fs = require("fs"); // Add fs module for file system operations

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === "/submit" && req.method === "POST") {
    // Handle form submission
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      // Write submitted data to a file
      fs.writeFile("data.txt", data, (err) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write("Error occurred while saving data");
          res.end();
        } else {
          // Send redirection response
          res.writeHead(302, { Location: "/" });
          res.end();
        }
      });
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
