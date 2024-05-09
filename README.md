# To-Do List Application

This To-Do List application is a simple yet powerful tool to manage day-to-day tasks with the added functionality of setting due dates and times, similar to professional project management tools like Trello or GitHub Projects. It is built using the MVC architecture to ensure a clean separation of concerns between the model (data), view (UI), and controller (logic).

## Features

- **Add Tasks**: Users can add tasks with a description, due date, and time.
- **Delete Tasks**: Users can delete tasks they no longer need.
- **Toggle Task Completion**: Click on a task to toggle its completion status, striking it through if completed.
- **Persistent Storage**: Tasks are stored in local storage, so they persist between sessions.

## Installation

No installation is necessary. Simply clone this repository and open `index.html` in your web browser to start using the application.

```bash
git clone https://github.com/Ahzem/to-do-list.git
cd to-do-list
open index.html
```

## Usage

1. **Adding a Task**:
   - Enter the task description in the text input field.
   - Optionally set a due date and time.
   - Click the "Add" button or press Enter to add the task to the list.

2. **Toggling Task Completion**:
   - Click on the task in the list to toggle its completion status.

3. **Deleting a Task**:
   - Click on the '✖' icon next to the task you wish to delete.

## Technologies Used

- HTML
- CSS
- JavaScript
- LocalStorage for data persistence

## File Structure

- `index.html`: The entry point of the application containing the HTML structure.
- `style.css`: Contains all the styles for the application.
- MVC
  - `model.js`: Contains the data model and functions to interact with the data.
  - `view.js`: Contains functions to update the UI based on the data.
  - `controller.js`: Contains the application logic and event listeners.

## Future Enhancements

- **Task Prioritization**: Allow users to set priority levels for tasks.
- **Task Categories/Tags**: Implement categories or tags for better organization.
- **Advanced Sorting**: Sort tasks by date, priority, or completion status.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
