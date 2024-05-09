// View
class TaskView {
    constructor() {
        this.model = new TaskModel();
        this.controller = new TaskController(this.model, this);
        this.addTaskInput = document.getElementById('input-box');
        this.listContainer = document.getElementById('list-container');
        this.addTaskButton = document.getElementById('add-button');
  
        this.addTaskButton.addEventListener('click', () => this.controller.addTask(this.addTaskInput.value));
        this.listContainer.addEventListener('click', (event) => this.handleListClick(event));
  
        this.displayTasks(this.model.tasks);
    }
  
    displayTasks(tasks) {
        this.listContainer.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.content;
            if(task.completed) li.classList.add('checked');
            const span = document.createElement('span');
            span.textContent = '✖';
            span.className = 'close';
            span.onclick = () => this.controller.removeTask(index);
            li.appendChild(span);
            this.listContainer.appendChild(li);
        });
    }
  
    handleListClick(event) {
        const element = event.target;
        if (element.tagName === 'LI') {
            const index = Array.from(this.listContainer.children).indexOf(element);
            this.controller.toggleTask(index);
        }
    }
  }