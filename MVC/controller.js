// Controller
class TaskController { // Controller class
  constructor(model, view) { // Initialize the controller with model and view
      this.model = model; // Set the model
      this.view = view; // Set the view
      this.view.setController(this); // Ensuring the view has a reference to the controller.
  }

  onInit() {
      // Load tasks from model and display them in the view.
      this.view.displayTasks(this.model.tasks); // Display the tasks in the view
  }

  addTask(content, dueDate, dueTime, priority) { // Method to add a new task
      this.model.addTask(content, dueDate, dueTime, priority); // Call the model method to add a task
      this.view.displayTasks(this.model.tasks); // Redraw tasks to reflect changes
  }

  removeTask(index) { // Method to remove a task
      this.model.removeTask(index); // Call the model method to remove a task
      this.view.displayTasks(this.model.tasks); // Redraw tasks to reflect changes
  }

  toggleTask(index) { // Method to toggle the completion status of a task
    this.model.toggleTask(index); // Call the model method to toggle the task completion status
    this.view.displayTasks(this.model.tasks); // Redraw tasks to reflect changes
}
}

document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM content to load.
  const model = new TaskModel(); // Model is initialized first.
  const view = new TaskView();   // View is initialized second.
  const controller = new TaskController(model, view); // Controller is initialized last and given references to both model and view.
  
  controller.onInit();            // Now call onInit, ensuring all references are set.
});
