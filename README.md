## [Live Link](https://anjali20dashboard.netlify.app/)
# Task Management Dashboard

This is a Task Management Dashboard built with **React**, **Redux Toolkit**, and **Tailwind CSS**.

## Features

- **Project Management**: Create and manage multiple projects.
- **Task Management**: Add tasks to specific projects, assign task priorities
- **Task Filtering**: Filter tasks by Today, Yesterday, or This Week.
- **Persistent Data**: All tasks and projects are saved in local storage.
- **Responsive Design**: The app is fully responsive using **Tailwind CSS**.

## Assumptions

- **Single-User**: The app is designed for single-user usage, with no authentication or multi-user capabilities.
- **Local Storage**: Tasks and projects are saved in the browser's local storage for persistence.
- **Filtering Based on Dates**: Task filtering relies on task creation dates (Today, Yesterday, This Week).
- **Default Project Load**: If no project is selected, the first project will be loaded by default.

## Approach

### 1. State Management with Redux Toolkit
The app uses **Redux Toolkit** to manage the global state for tasks and projects. Key features like adding tasks, moving tasks, and filtering tasks are handled through actions and reducers in **Redux**. Two key slices are:
- `tasksSlice.js`: Handles task creation, task movement, and task storage in local storage.
- `projectsSlice.js`: Manages projects.

### 2. Task Filtering and Movement
- Tasks can be filtered by creation date (Today, Yesterday, This Week) through the `Header.js` component.

### 3. Persistent Storage
- The tasks and projects are saved in local storage after every modification. This ensures that the data remains intact between browser sessions.

### 4. Responsive UI with Tailwind CSS
- Tailwind CSS was used to build a responsive and clean user interface.

## Folder Structure


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
