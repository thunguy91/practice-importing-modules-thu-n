const fs = require('fs');

function saveTasks(filePath, tasks) {

    fs.writeFileSync(filePath, JSON.stringify(tasks));
}

function loadTasks(filePath) {

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "uft-8");
        return JSON.parse(data);
    } else {
        return [];
    }
}

module.exports = { saveTasks, loadTasks };