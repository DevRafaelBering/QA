const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

let tasks = [];

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
    res.status(201).json(task);
  } else {
    res.status(400).json({ error: "Task is required" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
