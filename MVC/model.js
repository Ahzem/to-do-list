// Model
class TaskModel { // Class to handle the tasks
    constructor() { // Initialize the tasks array
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get tasks from local storage or initialize as empty array
    }

    addTask(taskContent, dueDate, dueTime, priority) { // Method to add a new task
        if (taskContent) { // Check if the task content is not empty
            this.tasks.push({ content: taskContent, dueDate, dueTime, priority, completed: false }); // Add the new task to the tasks array
            this.updateLocalStorage(); // Update the local storage with the new tasks
        }
    }

    removeTask(index) { // Method to remove a task by index
        this.tasks.splice(index, 1); // Remove the task at the specified index
        this.updateLocalStorage(); // Update the local storage with the new tasks
    }

    toggleTask(index) { // Method to toggle the completion status of a task
        this.tasks[index].completed = !this.tasks[index].completed; // Toggle the 'completed' property of the task
        this.updateLocalStorage(); // Update the local storage with the new tasks
        
    }

    updateLocalStorage() { // Method to update the local storage with the tasks
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Store the tasks array in local storage
    }
}

