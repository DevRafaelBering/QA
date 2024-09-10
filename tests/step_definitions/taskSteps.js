const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const fetch = (await import("node-fetch")).default;

let pageContent;

Given("eu estou na página de gerenciamento de tarefas", async function () {
  const response = await fetch("http://localhost:3000");
  pageContent = await response.text();
});

When("eu adiciono uma nova tarefa {string}", async function (taskName) {
  await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: taskName }),
  });
});

Then(
  "a tarefa {string} deve aparecer na lista de tarefas",
  async function (taskName) {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    expect(tasks).to.include(taskName);
  }
);

module.exports = stepDefinitions;
import fetch from "node-fetch";
