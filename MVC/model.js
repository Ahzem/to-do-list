// Model
class TaskModel {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
  
    addTask(taskContent) {
        if(taskContent) {
            this.tasks.push({ content: taskContent, completed: false });
            this.updateLocalStorage();
        }
    }
  
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }
  
    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }
  
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }