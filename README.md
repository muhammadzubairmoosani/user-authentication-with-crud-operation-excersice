# CRUD Operation with Redux Toolkit and React

This is a sample project that demonstrates CRUD (Create, Read, Update, Delete) operations using Redux Toolkit and React. It includes an implementation of user management with a user list and the ability to add, update, delete, and sort users.

## File Structure

The project follows a specific file structure to organize the code and resources effectively. Here's an overview of the file structure:

- `src` -`assets`: This directory contains all assets. -`components`: This directory contains React components used in the application.

  - `authProvider.jsx`: Component for user route authentication.
  - `emptyUserList.jsx`: Component for empty user list.
  - `layout.jsx`: Component for root-layout.
  - `loader.jsx`: Component for linear loader.
  - `login.jsx`: Component for user login.
  - `modal.jsx`: Component for edit, and adding a new user.
  - `pageNotFound.jsx`: Component for page not found.
  - `userList.jsx`: Component for user list.
  - `services`: This directory contains utility functions and services.
    - `api.js`: Service for making API calls (fetching user list).
    - `auth.js`: Firebaes auth methods (e.g. signIn, signUp).
    - `firebase_config.js`: Firebase App and Auth configuration.
    - `index.js`: Export point.
    - `localStorage.js`: Service for interacting with local storage (adding, updating, and deleting users).
  - `store`: This directory contains Redux-related code.
    - `UserReducer`
      - `userListSlice.js`: Redux slice for managing the user list state and actions.
      - `authSlice.js`: Redux slice for managing the auth user state and actions.
      - `index.js`: Export point.
  - `utils`: This directory contains utilities.
    - `userList.js`: Dummy user list.
  - `App.js`: The main component of the application, where other components are rendered.
  - `index.js`: The entry point of the application.
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
- Node-SASS
- Redux Toolkit
- Fetch (for API requests)
- Firebase (for user auththentication)
- Local storage (for storing user data)

## Live Demo

- [Visit the live demo website](https://crud-operation-muhammadzubairmoosani.vercel.app/)

## License

This project is licensed under the [MIT License](LICENSE).
