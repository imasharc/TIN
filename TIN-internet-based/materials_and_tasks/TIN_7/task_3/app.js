const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Use body-parser middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the public folder
app.use(express.static("public"));

// Render the form page
app.get("/", (req, res) => {
  res.render("form");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { firstName, lastName, email } = req.body;
  const data = { firstName, lastName, email };
  res.render("results", { data });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
