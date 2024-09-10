document.getElementById("add-task-btn").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value;
  if (task) {
    fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    })
      .then((response) => response.json())
      .then((newTask) => {
        const taskList = document.getElementById("task-list");
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.textContent = newTask;
        taskList.appendChild(taskItem);
        taskInput.value = "";
      });
  }
});

// Load existing tasks on page load
fetch("/tasks")
  .then((response) => response.json())
  .then((tasks) => {
    const taskList = document.getElementById("task-list");
    tasks.forEach((task) => {
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";
      taskItem.textContent = task;
      taskList.appendChild(taskItem);
    });
  });
