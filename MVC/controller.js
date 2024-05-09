// Controller
class TaskController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
  }

  onInit() {
      this.view.displayTasks(this.model.tasks);
  }

  addTask(taskContent, dueDate, dueTime, priority) {
      this.model.addTask(taskContent, dueDate, dueTime, priority);
      this.view.displayTasks(this.model.tasks);
      this.view.addTaskInput.value = '';
      this.view.datePicker.value = '';
      this.view.timePicker.value = '';
      this.view.prioritySelect.value = 'Medium'; // Reset to default priority
  }

  removeTask(index) {
      this.model.removeTask(index);
      this.view.displayTasks(this.model.tasks);
  }

  toggleTask(index) {
      this.model.toggleTask(index);
      this.view.displayTasks(this.model.tasks);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const model = new TaskModel();
  const view = new TaskView(model);
  const controller = new TaskController(model, view);
  view.setController(controller);
  controller.onInit();  // Ensure this is called after all components are set.
});

