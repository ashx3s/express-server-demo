"use strict";
// path helps us work with file locations
const path = require("path");
const express = require("express");
const app = express();

const port = 3000;
const pages = path.join(__dirname, "pages");

// app.use is for middleware
app.use(express.static("public"));

// app.get serves a route on a get request
app.get("/", (req, res) => {
  res.sendFile(path.join(pages, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(pages, "about.html"));
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// app.listen makes express listen for activity on a specific port
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
