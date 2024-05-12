class TaskView {
    constructor() {
        this.addTaskInput = document.getElementById('input-box');
        this.datePicker = document.getElementById('date-picker');
        this.timePicker = document.getElementById('time-picker');
        this.prioritySelect = document.getElementById('priority-select');
        this.addTaskButton = document.getElementById('add-button');
        this.listContainer = document.getElementById('list-container');
        this.isEventBound = false; // Flag to track if event listeners are already bound0
        this.listContainer.addEventListener('click', (event) => {
            // Check if the click is on a task row itself, not just the remove button
            if (event.target.className.includes('task-row') || event.target.parentNode.className.includes('task-row')) {
                const index = Array.from(this.listContainer.children).indexOf(
                    event.target.closest('.task-row') // Ensures we target the li element, not child elements
                );
                this.controller.toggleTask(index);
            }
        });
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
            li.className = 'task-row' + (task.completed ? ' checked' : ''); // Add 'checked' class if completed
            li.innerHTML = `
                <div class="task-desc">${task.content}</div>
                <div class="task-date">${task.dueDate || 'N/A'}</div>
                <div class="task-time">${task.dueTime || 'N/A'}</div>
                <div class="task-priority">${task.priority}</div>
                <button class="task-remove-btn" data-index="${index}">✖</button>
            `;
            this.listContainer.appendChild(li);
        });
    }    
}
