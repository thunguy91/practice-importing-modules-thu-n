const path = require("path");
const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

const filePath = path.join(__dirname, "tasks.json");
// Define file path for tasks.json

let tasks = fileHandler.loadTasks(filePath);
// Load existing tasks

taskManager.addTask(tasks, "Do Laundry");
taskManager.addTask(tasks, "Wash Dishes");
taskManager.addTask(tasks, "Sweep the Floor");

taskManager.listTasks(tasks);

fileHandler.saveTasks(filePath, tasks);
