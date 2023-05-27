# CRUD Operation with Redux Toolkit and React

This is a sample project that demonstrates CRUD (Create, Read, Update, Delete) operations using Redux Toolkit and React. It includes an implementation of user management with a user list and the ability to add, update, delete, and sort users.

## File Structure

The project follows a specific file structure to organize the code and resources effectively. Here's an overview of the file structure:

├── src
│ ├── assets
│ ├── components
│ │ ├── EditModal
│ │ │ ├── index.js
│ │ │ ├── style.scss
│ │ ├── Layout
│ │ │ ├── index.js
│ │ │ ├── style.scss
│ │ ├── UserList
│ │ │ ├── index.js
│ │ │ ├── style.scss
│ ├── store
│ │ ├── reducer
│ │ │ ├── UserList
│ │ │ │ ├── APIs.js
│ │ │ │ ├── userListReducer.js
│ │ ├── index.js
│ ├── App.js
│ ├── index.js
├── public
│ ├── index.html
├── package.json
├── README.md

- `src/components`: This directory contains React components used in the application.

  - `EditModal`
    - `index.js`: Component for edit, and adding a new user.
    - `style.scss`: File for styling.
  - `Layout`
    - `index.js`: Component for edit, and adding a new user.
    - `style.scss`: File for styling.
  - `UserList`
    - `index.js`: Component for edit, and adding a new user.
    - `style.scss`: File for styling.

- `src/store`: This directory contains Redux-related code.

  - `userReducer`
    - `userListSlice.js`: Redux slice for managing the user list state and actions.

- `src/services`: This directory contains utility functions and services.

  - `api.js`: Service for making API calls (fetching user list).
  - `localStorage.js`: Service for interacting with local storage (adding, updating, and deleting users).

- `src/App.js`: The main component of the application, where other components are rendered.

- `src/index.js`: The entry point of the application.

- `public/index.html`: The HTML template file for the application.

- `package.json`: The package configuration file for managing dependencies and scripts.

- `sass.config.js`: The node-sass configuration file for managing .scss extension files.

## Setup and Usage

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit: `http://localhost:3000`

## Features

- Fetches the list of users from the API.
- Adds a new user to the list and saves it to local storage.
- Updates an existing user in the list and updates it in local storage.
- Deletes a user from the list and removes it from local storage.

## Technologies Used

- React
- Redux Toolkit
- Fetch (for API requests)
- Local storage (for storing user data)

## Live Demo

- [Visit the live demo website](https://crud-operation-rosy.vercel.app)

## License

This project is licensed under the [MIT License](LICENSE).
