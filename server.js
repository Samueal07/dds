import express from "express";
import fs from "fs";
import path from "path";
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("default");
});

app.get("/data", (req, res) => {
  const filePath = path.join(__dirname, "db.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).json({ error: "Failed to read data" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
