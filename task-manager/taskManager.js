function addTask(tasks, task) {
    tasks.push(task);
}

function listTasks(tasks) {
    for (const task of tasks) {
        console.log(task);
    }
}
module.exports = { addTask, listTasks };