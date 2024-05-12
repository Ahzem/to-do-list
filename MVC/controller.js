// Controller
class TaskController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
      this.view.setController(this); // Ensuring the view has a reference to the controller.
  }

  onInit() {
      // Load tasks from model and display them in the view.
      this.view.displayTasks(this.model.tasks);
  }

  addTask(content, dueDate, dueTime, priority) {
      this.model.addTask(content, dueDate, dueTime, priority);
      this.view.displayTasks(this.model.tasks);
  }

  removeTask(index) {
      this.model.removeTask(index);
      this.view.displayTasks(this.model.tasks);
  }

  toggleTask(index) {
    this.model.toggleTask(index);
    this.view.displayTasks(this.model.tasks); // Redraw tasks to reflect changes
}
}

document.addEventListener('DOMContentLoaded', () => {
  const model = new TaskModel();
  const view = new TaskView();
  const controller = new TaskController(model, view);

  controller.onInit(); // Now safe to call, as all components are properly initialized.
});


document.addEventListener('DOMContentLoaded', () => {
  const model = new TaskModel(); // Model is initialized first.
  const view = new TaskView();   // View is initialized second.
  const controller = new TaskController(model, view); // Controller is initialized last and given references to both model and view.

  view.setController(controller); // Make sure the view knows about the controller.
  controller.onInit();            // Now call onInit, ensuring all references are set.
});
