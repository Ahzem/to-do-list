# To-Do List Application

This To-Do List application is a simple yet powerful tool to manage day-to-day tasks with the added functionality of setting due dates and times, similar to professional project management tools like Trello or GitHub Projects. It utilizes the MVC (Model-View-Controller) architecture to ensure a clean separation of concerns between the data (model), user interface (view), and the logic that handles input and updates (controller).

![To-Do List Application](./assets/screenshot.png)

## Features

- **Add Tasks**: Users can input tasks with descriptions, set due dates and times.
- **Delete Tasks**: Allows for the removal of tasks that are no longer needed.
- **Toggle Task Completion**: Users can mark tasks as completed or toggle them back to active.
- **Persistent Storage**: Utilizes local storage to persist tasks across browser sessions.

## Installation

No installation necessary. Simply clone this repository and open `index.html` in your web browser to start managing your tasks.

```bash
git clone https://github.com/Ahzem/to-do-list.git
cd to-do-list
open index.html
```

## Usage

1. **Adding a Task**:
   - Type the task description into the text input field.
   - Optionally, set a due date and time.
   - Click the "Add" button or press Enter to submit the task to the list.

2. **Toggling Task Completion**:
   - Click on a task in the list to toggle its completion status, striking it through if completed.

3. **Deleting a Task**:
   - Click the '✖' icon next to any task you wish to remove.

## Technologies Used

- **HTML**: Structures the web content.
- **CSS**: Styles the application.
- **JavaScript**: Powers the application's interactivity and local storage management.

## File Structure

- `index.html`: The main HTML document.
- `style.css`: CSS file for styling.
- `MVC/`: MVC architecture folders.
  - `model.js`: Manages the data and state of the tasks.
  - `view.js`: Handles all UI updates.
  - `controller.js`: Manages user input, integrates the model and view components.

## Future Enhancements

- **Task Prioritization**: Integrate priority levels for tasks to emphasize task urgency.
- **Task Categories/Tags**: Add categories or tags for better task organization.
- **Advanced Sorting**: Implement sorting features to organize tasks by date, priority, or completion status.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change or enhance.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
