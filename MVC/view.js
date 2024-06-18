class TaskView { // View class to handle UI rendering
    constructor() { // Initialize the UI elements
        this.addTaskInput = document.getElementById('input-box'); // Get the input box element
        this.datePicker = document.getElementById('date-picker'); // Get the date picker element
        this.timePicker = document.getElementById('time-picker'); // Get the time picker element
        this.prioritySelect = document.getElementById('priority-select'); // Get the priority select element
        this.addTaskButton = document.getElementById('add-button'); // Get the add button element
        this.listContainer = document.getElementById('list-container'); // Get the list container element
        this.isEventBound = false; // Flag to track if event listeners are already bound0
        this.listContainer.addEventListener('click', (event) => { // Add event listener to the list container
            // Check if the click is on a task row itself, not just the remove button
            if (event.target.className.includes('task-row') || event.target.parentNode.className.includes('task-row')) { // Check if the click is on a task row itself, not just the remove button
                const index = Array.from(this.listContainer.children).indexOf( // Get the index of the task row clicked
                    event.target.closest('.task-row') // Ensures we target the li element, not child elements
                );
                this.controller.toggleTask(index); // Call the controller method to toggle the task completion status
            }
        });
    }

    setController(controller) { // Set the controller for the view
        this.controller = controller; // Set the controller
        if (!this.isEventBound) { // Check if the event listeners are already bound
            this.addTaskButton.addEventListener('click', () => { // Add event listener to the add button
                this.controller.addTask( // Call the controller method to add a task
                    this.addTaskInput.value, // Pass the input box value
                    this.datePicker.value, // Pass the date picker value
                    this.timePicker.value, // Pass the time picker value
                    this.prioritySelect.value // Pass the priority select value
                );
            });

            this.listContainer.addEventListener('click', (event) => { // Add event listener to the list container
                if (event.target.className === 'task-remove-btn') { // Check if the click is on the remove button
                    const index = event.target.dataset.index; // Get the index of the task to remove
                    this.controller.removeTask(index); // Call the controller method to remove the task
                }
            });

            this.isEventBound = true; // Set the flag as true after binding events
        }
    }

    displayTasks(tasks) { // Display the tasks in the list container
        this.listContainer.innerHTML = ''; // Clear the list container
        tasks.forEach((task, index) => { // Loop through each task
            const li = document.createElement('li'); // Create a new list item element
            li.className = 'task-row' + (task.completed ? ' checked' : ''); // Add 'checked' class if completed
            li.innerHTML = ` 
                <div class="task-desc">${task.content}</div>
                <div class="task-date">${task.dueDate || 'N/A'}</div>
                <div class="task-time">${task.dueTime || 'N/A'}</div>
                <div class="task-priority">${task.priority}</div>
                <button class="task-remove-btn" data-index="${index}">✖</button>
            `; // Add the task details and remove button to the list item
            this.listContainer.appendChild(li); // Append the list item to the list container
        });
    }    
}
