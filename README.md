# Quiz Application 🎓

This is a fully functional Quiz Application built using React.js. The application allows users to select a subject, take a quiz, and receive their scores along with pass/fail status upon completion. Additional features include a timer, difficulty levels, and a leaderboard to enhance the user experience.

## Table of Contents 📑

- [Features](#features) ✨
- [Project Structure](#project-structure) 🗂️
- [Setup and Installation](#setup-and-installation) 🔧
- [Running the Application](#running-the-application) 🏃
- [Technologies Used](#technologies-used) 💻

## Features ✨

- User can input their name and select a subject and difficulty level.
- Quiz questions are displayed based on the selected subject and difficulty level.
- Timer for each question.
- Score calculation based on correct and incorrect answers.
- Display final score and pass/fail status.
- Leaderboard to track top scores.
- Responsive and user-friendly UI.

## Project Structure 🗂️
quiz-application/

├── public/

│ ├── index.html

│ └── ...

├── src/

│ ├── components/

│ │ ├── CustomButton.js

│ │ ├── Dialog.js

│ │ ├── Timer.js

│ │ └── Leaderboard.js

│ ├── pages/

│ │ ├── TestInfo.js

│ │ ├── StartTest.js

│ │ └── Greeting.js

│ ├── styles/

│ │ ├── App.module.css

│ │ ├── CustomButton.module.css

│ │ ├── TestInfo.module.css

│ │ ├── StartTest.module.css

│ │ ├── Greeting.module.css

│ │ ├── Timer.module.css

│ │ └── Leaderboard.module.css

│ ├── App.js

│ ├── index.js

│ └── ...

├── package.json

├── README.md

└── ...


## Setup and Installation

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Steps to Set Up the Project

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/quiz-application.git
    cd quiz-application
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

    This will install the necessary packages, including `react-router-dom` and `@mui/material` for routing and Material-UI components.



## Running the Application

1. **Start the development server**:
    ```bash
    npm start
    ```

    This command will start the React development server. Open your browser and navigate to `http://localhost:3000` to see your application running.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- React Router: For routing between different pages.
- Material-UI: A popular React UI framework for creating responsive, modern components.
- CSS Modules: For styling components with modular and scoped CSS.




