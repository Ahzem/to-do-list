class TaskView {
    constructor() {
        this.addTaskInput = document.getElementById('input-box');
        this.datePicker = document.getElementById('date-picker');
        this.timePicker = document.getElementById('time-picker');
        this.prioritySelect = document.getElementById('priority-select');
        this.addTaskButton = document.getElementById('add-button');
        this.listContainer = document.getElementById('list-container');
        this.isEventBound = false; // Flag to track if event listeners are already bound
    }

    setController(controller) {
        this.controller = controller;
        if (!this.isEventBound) {
            this.addTaskButton.addEventListener('click', () => {
                this.controller.addTask(
                    this.addTaskInput.value,
                    this.datePicker.value,
                    this.timePicker.value,
                    this.prioritySelect.value
                );
            });

            this.listContainer.addEventListener('click', (event) => {
                if (event.target.className === 'task-remove-btn') {
                    const index = event.target.dataset.index;
                    this.controller.removeTask(index);
                }
            });

            this.isEventBound = true; // Set the flag as true after binding events
        }
    }

    displayTasks(tasks) {
        this.listContainer.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'task-row';
            li.innerHTML = `
                <div class="task-desc">${task.content}</div>
                <div class="task-date">${task.dueDate || 'N/A'}</div>
                <div class="task-time">${task.dueTime || 'N/A'}</div>
                <div class="task-priority">${task.priority}</div>
                <button class="task-remove-btn" data-index="${index}">✖</button>
            `;
            if (task.completed) li.classList.add('checked');
            this.listContainer.appendChild(li);
        });
    }
}
