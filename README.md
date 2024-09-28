## Sassanta - Productivity Timer and Task Manager

Sassanta is a web-based productivity application designed to help individuals and teams manage time efficiently. It features a customizable countdown timer, a task manager with prioritization, and a unique layout that organizes tasks into four quadrants based on urgency and importance. Sassanta is responsive, mobile-friendly, and supports offline usage through service workers.


### Table of Contents
 [Features](#features)
 [App Structure](#app-structure)
 [Installation](#installation)
 [Usage](#usage)
 [Dependencies](#dependencies)
 [Development](#development)
 [How It Looks](#how-it-looks)


### Features

Customizable Countdown Timer: Set timers for specific tasks to enhance focus and productivity.
Task Management: Organize tasks by priority and categorize them into four quadrants:
  1. Urgent & Important
  2. Not Urgent & Not Important
  3. Not Urgent but Important
  4. Urgent but Not Important
Responsive Design: Optimized for both mobile and desktop usage.
Offline Functionality: Supports offline usage via service workers.
Calendar & Analytics (Planned Features): Integrate calendar views and track time spent on tasks with simple analytics.


### App Structure

The core structure of the Sassanta app is as follows:

Sassanta/
│
├── public/
│   ├── index.html           # Main HTML file
│   └── serviceWorker.js      # Service worker for offline functionality
│
├── src/
│   ├── components/
│   │   ├── CountdownTimer.js # Timer component
│   │   └── TaskManager.js    # Task management with four quadrants
│   ├── styles/
│   │   ├── CountdownTimer.css # Styling for Countdown Timer
│   │   └── TaskManager.css    # Styling for Task Manager
│   ├── App.js                # Main App component
│   ├── index.js              # Main entry point of the app
│   └── index.css             # Global styles
│
├── .gitignore
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── yarn.lock / package-lock.json # Dependency lock files


### Installation

To set up and run the Sassanta app on your local machine:

1. Clone the Repository:

   git clone https://github.com/your-username/Sassanta.git

2. Navigate to the Project Directory:

   cd sassanta

3. Install Dependencies:

   npm install

4. Start the Development Server:

   npm start


The app will be available at `http://localhost:3000` by default.


### Usage

Once the app is running, you can:

Set a countdown timer for tasks.
Add tasks to the "task manager", prioritizing them by urgency and importance.
Organize tasks into one of the following four quadrants:
  - Urgent & Important
  - Not Urgent & Not Important
  - Not Urgent but Important
  - Urgent but Not Important
Offline functionality: Sassanta can be used offline once the service worker is registered.

### Production Build

To create an optimized production build:

npm run build


### Dependencies

The Sassanta app is built using the following technologies and libraries:

React.js: The core JavaScript framework.
Moment.js: For date and time manipulation.
FullCalendar: Calendar view for scheduling tasks (planned).
Chart.js: For displaying analytics (planned).
Service Workers: For enabling offline functionality.
CSS3: For styling and responsive design.

To install all dependencies, run:

npm install moment @fullcalendar/react @fullcalendar/daygrid chart.js


### Development

Countdown Timer: The timer allows users to set a specific duration for tasks, and it's displayed in `HH:mm:ss` format.
Task Manager: Users can add tasks and assign them to one of the four quadrants based on their urgency and importance.
Responsive Design: The layout adjusts for both desktop and mobile devices, making the app accessible across various screen sizes.

### How It Looks

The final version of Sassanta will resemble this layout:

(Include a mockup or wireframe image here.)





### Contributing

If you'd like to contribute to this project, feel free to submit issues or pull requests.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


### License

This project is licensed under the MIT License.
