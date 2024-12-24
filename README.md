# µ - Full Stack Algorithm Testing Application

This project is a full-stack web application that provides an interactive way to test algorithms such as Palindromes, Perfect Numbers, Fibonacci Sequence, and more. The app consists of two main components: the **frontend** (built with React) and the **backend** (using Express). It enables users to test and visualize various algorithms in a user-friendly interface.
The application supports dark mode, which can be toggled in the UI. This feature allows users to switch between light and dark themes for a better user experience.

## Pages

The application includes 4 main pages:

- **Main Page**: The landing page that introduces the project and its functionality.
- **Palindrome Page**: A page where users can input strings to check if they are palindromes.
- **Perfect Numbers Page**: A page for checking if a number is a perfect number.
- **Fibonacci Detective Page**: A page to visualize and check if numbers in Fibonacci sequance.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces, enabling a dynamic and responsive experience.
- **Vite**: A fast build tool that helps in the efficient bundling and development of the app.
- **Tailwind CSS**: A utility-first CSS framework that simplifies the process of designing responsive and customizable UI components.
- **React Router DOM**: A routing library for navigating between different views in the application.
- **React Icons**: A set of icons for integrating into the UI, providing intuitive visual representations of features.
- **Axios** : A third party libery for effecient data fetching .

### Backend

- **Express**: A minimal and flexible Node.js web application framework, used to handle the server-side logic.
- **Express Validator**: A library used for validation and sanitization of input data, ensuring proper and secure handling of user inputs.
- **CORS**: A package to handle Cross-Origin Resource Sharing, allowing the frontend and backend to communicate safely across different domains.
- **dotenv**: A module to load environment variables from a `.env` file, ensuring sensitive data like API keys are not hard-coded into the codebase.
- **vitest** : Vitest (pronounced as "veetest") is a next generation testing framework powered by Vite.

### Docker

- **Docker**: The project is Dockerized, which allows you to easily run the entire application with containers. The Docker Compose setup helps to manage both frontend and backend services.

## Application Features:

The application includes 4 pages, easily navigable via the navbar or cards at the bottom of each page (above the footer).

Dark mode is integrated for an enhanced user experience along with simple scrolling and viewing native animation writing in pure CSS.

Several reusable components that simplify the application building blocks.

Custom hook designed particularly for this project to handling data and errors comming from the server.

Hooks used : useState , useFetchData(custom hook) , useLocation , useEffect , useRef.

## Deployment:

Frontend: Deployed on Vercel.

Backend: Deployed on Koyeb.

## visit the app via the url

https://ln-page-frontend.vercel.app

## How to Run

### FrontEnd

1. Navigate to the frontend directory:
   ```bash
   cd front_end
2. Install dependencies:
   npm install
3. Start the frontend application:
   npm run dev
   ```

### BackEnd

1. Navigate to the backend directory:

```bash
 cd back_end
 2. Install dependencies:
 npm install
 3. Start the backend server::
 npm run dev
```

## Conclusion

This project is designed to provide users with a simple and interactive platform to test common algorithms. With a clean and responsive UI built using React and Tailwind CSS, along with a robust backend built using Express, this full-stack application serves as both a learning tool and a demonstration of algorithmic concepts. Additionally, the built-in dark mode ensures that users have a comfortable viewing experience, whether they prefer a light or dark interface.

## Note :  

please if you encounter some issues of network error in the algorithms forms  don't hesitate to contact me that's due to the limitations of client requestes in the Koyeb PAAS free plan wich host our server.

## Running the App with Docker

The entire application is Dockerized, running in two separate Docker containers for frontend and backend.
To run the front-end and back-end in a separate container , follow these steps:

A. Pull the latest Docker image for the front-end:

```bash
docker pull push saidbh08/front_app:latest
docker run -d -p 3002:3002 saidbh08/front_app:latest
```
- Then visit the website via :  http://localhost:3002.

B. Pull the latest Docker image for the back-end:

```bash
docker pull saidbh08/backend_app:latest
docker run -d -p 3001:3001 saidbh08/backend_app:latest
```
- when you visit http://localhost:3001 you should see the message **"Backend is running!"** on the top left of the screen.



if you like the project dont forget to click on the start button .
