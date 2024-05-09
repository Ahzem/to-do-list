// Controller
class TaskController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
  }

  addTask(taskContent) {
      this.model.addTask(taskContent);
      this.view.displayTasks(this.model.tasks);
      this.view.addTaskInput.value = '';
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
  new TaskView();
});
