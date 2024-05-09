// View
class TaskView {
    constructor(model) {
        this.model = model;
        this.addTaskInput = document.getElementById('input-box');
        this.datePicker = document.getElementById('date-picker');
        this.timePicker = document.getElementById('time-picker');
        this.prioritySelect = document.getElementById('priority-select');
        this.addTaskButton = document.getElementById('add-button');
        this.listContainer = document.getElementById('list-container');
    }

    setController(controller) {
        this.controller = controller;
        this.addTaskButton.addEventListener('click', () => {
            this.controller.addTask(
                this.addTaskInput.value,
                this.datePicker.value,
                this.timePicker.value,
                this.prioritySelect.value
            );
        });

        this.listContainer.addEventListener('click', (event) => this.handleListClick(event));
        this.controller.onInit();
    }

    displayTasks(tasks) {
        this.listContainer.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = `${task.content} (Due: ${task.dueDate || 'N/A'} at ${task.dueTime || 'N/A'}, Priority: ${task.priority})`;
            if (task.completed) li.classList.add('checked');
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

