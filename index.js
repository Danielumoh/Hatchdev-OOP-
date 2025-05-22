var Task = /** @class */ (function () {
    function Task(description) {
        this.description = description;
        this.status = "pending";
    }
    Task.prototype.completeTask = function () {
        this.status = "successful";
    };
    Task.prototype.updateTask = function (newDescription) {
        this.description = newDescription;
    };
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.createTask = function (description) {
        var newTask = new Task(description);
        this.tasks.push(newTask);
        return newTask;
    };
    TaskManager.prototype.listTasks = function () {
        this.tasks.forEach(function (task, index) {
            console.log("".concat(index + 1, ": ").concat(task.description, " -").concat(task.status));
        });
    };
    TaskManager.prototype.completeTask = function (index) {
        if (this.tasks[index]) {
            this.tasks[index].completeTask();
        }
        else {
            console.log("Task not Completed!");
        }
    };
    return TaskManager;
}());
//Examples
var taskManager = new TaskManager();
taskManager.createTask("Learn Object Oriented Programming");
taskManager.createTask("Build a task Manager for Hatchdev 3.1");
taskManager.listTasks();
taskManager.completeTask(0);
taskManager.listTasks();
