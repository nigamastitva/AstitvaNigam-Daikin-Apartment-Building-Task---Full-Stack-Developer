Apartment Building Control System - Setup Guide

This document provides step-by-step instructions to set up and run both the backend (Java/Spring Boot) and frontend (React/Next.js) components of the Apartment Building Control System.
Prerequisites

Before you begin, ensure you have the following installed on your machine:

    Java Development Kit (JDK) 17

    Maven 3.6.3 or later

    Node.js 14.x or later

    npm 6.x or later

    Git

Backend Setup (Java/Spring Boot)
1. Clone the Repository
bash
Copy

git clone https://github.com/nigamastitva/AstitvaNigam-Daikin-Apartment-Building-Task---Full-Stack-Developer

cd Building_Management_System/Building_temperature_control_system/Backend

2. Build the Project
bash
Copy

mvn clean install

3. Run the Application
bash
Copy

mvn spring-boot:run

The backend server will start on http://localhost:8080
4. Verify Backend is Running

Open a browser or use Postman to test the API endpoint:
Copy

GET http://localhost:8080/api/building

You should receive a JSON response with building data.
Frontend Setup (React/Next.js)
1. Navigate to Frontend Directory

From the project root:
bash
Copy

cd Building_Management_System/Building_temperature_control_system/Frontend

2. Install Dependencies
bash
Copy

npm install

3. Configure Environment Variables

Create a .env.local file in the frontend directory with:
env
Copy

NEXT_PUBLIC_API_BASE_URL=http://localhost:8080

4. Run the Frontend Application
bash
Copy

npm run dev

The frontend will start on http://localhost:3000
5. Access the Application

Open your browser and navigate to:
Copy

http://localhost:3000

Project Structure
Backend Structure
Copy

backend/
├── src/
│   ├── main/
│   │   ├── java/com/buildingcontrol/
│   │   │   ├── config/          # Configuration classes
│   │   │   ├── controller/      # REST API controllers
│   │   │   ├── model/           # Data models
│   │   │   └── BuildingControlApplication.java  # Main application class
│   │   └── resources/           # Configuration files
│   └── test/                    # Unit and integration tests
└── pom.xml                      # Maven build file

Frontend Structure
Copy

frontend/
├── components/                  # React components
├── pages/                       # Next.js pages
├── public/                      # Static assets
├── styles/                      # CSS files
├── package.json                 # Node.js dependencies
└── next.config.js               # Next.js configuration

Available Scripts
Backend Scripts

    mvn clean install - Clean and build the project

    mvn spring-boot:run - Run the Spring Boot application

    mvn test - Run all tests

Frontend Scripts

    npm run dev - Start the development server

    npm run build - Create an optimized production build

    npm start - Start the production server

    npm test - Run all tests

Troubleshooting
Common Issues

    Port Conflicts:

        If ports 8080 (backend) or 3000 (frontend) are in use:

        For backend: Change server.port in backend/src/main/resources/application.properties

        For frontend: Change port in frontend/package.json scripts

    CORS Errors:

        Ensure the backend is running before starting the frontend

        Verify the NEXT_PUBLIC_API_BASE_URL in .env.local matches your backend URL

    Dependency Issues:

        If you encounter dependency errors:

        Backend: Run mvn clean install

        Frontend: Delete node_modules and run npm install

Development Workflow

    Start the backend server in one terminal:

bash
Copy

cd backend
mvn spring-boot:run

    Start the frontend in another terminal:

bash
Copy

cd frontend
npm run dev

    The application will automatically reload when you make changes to:

        Frontend: Any file in the pages or components directories

        Backend: Any Java file (requires server restart)

Deployment
Backend Deployment

    Build the JAR file:

bash
Copy

mvn clean package

    The executable JAR will be created at backend/target/building-control-0.0.1-SNAPSHOT.jar

    Deploy using:

bash
Copy

java -jar target/building-control-0.0.1-SNAPSHOT.jar

Frontend Deployment

    Create a production build:

bash
Copy

npm run build

    The optimized files will be in the frontend/.next directory

    Start the production server:

bash
Copy

npm start
