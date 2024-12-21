# µ - Full Stack Algorithm Testing Application

This project is a full-stack web application that provides an interactive way to test algorithms such as Palindromes, Perfect Numbers, Fibonacci Sequence, and more. The app consists of two main components: the **frontend** (built with React) and the **backend** (using Express). It enables users to test and visualize various algorithms in a user-friendly interface.
The application supports dark mode, which can be toggled in the UI. This feature allows users to switch between light and dark themes for a better user experience.

## Pages

The application includes 4 main pages:
- **Main Page**: The landing page that introduces the project and its functionality.
- **Palindrome Page**: A page where users can input strings to check if they are palindromes.
- **Perfect Numbers Page**: A page for checking if a number is a perfect number.
- **Fibonacci Detective Page**: A page to visualize and check if numbers in  Fibonacci sequance.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces, enabling a dynamic and responsive experience.
- **Vite**: A fast build tool that helps in the efficient bundling and development of the app.
- **Tailwind CSS**: A utility-first CSS framework that simplifies the process of designing responsive and customizable UI components.
- **React Router DOM**: A routing library for navigating between different views in the application.
- **React Icons**: A set of icons for integrating into the UI, providing intuitive visual representations of features.

### Backend
- **Express**: A minimal and flexible Node.js web application framework, used to handle the server-side logic.
- **Express Validator**: A library used for validation and sanitization of input data, ensuring proper and secure handling of user inputs.
- **CORS**: A package to handle Cross-Origin Resource Sharing, allowing the frontend and backend to communicate safely across different domains.
- **dotenv**: A module to load environment variables from a `.env` file, ensuring sensitive data like API keys are not hard-coded into the codebase.

### Docker
- **Docker**: The project is Dockerized, which allows you to easily run the entire application with containers. The Docker Compose setup helps to manage both frontend and backend services.

## visit the app via the url 

https://ln-page-frontend.vercel.app

## How to Run

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd front_end
2. Install dependencies:
   npm install
3. Start the frontend application:
   npm run dev

### Frontend
1-Navigate to the backend directory:
  cd back_end
2. Install dependencies:
   npm install
3. Start the backend server::
   npm run dev

## Conclusion
This project is designed to provide users with a simple and interactive platform to test common algorithms. With a clean and responsive UI built using React and Tailwind CSS, along with a robust backend built using Express, this full-stack application serves as both a learning tool and a demonstration of algorithmic concepts. Additionally, the built-in dark mode ensures that users have a comfortable viewing experience, whether they prefer a light or dark interface.
