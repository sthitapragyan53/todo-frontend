📌 MERN To-Do Application

A full-stack productivity application built using the MERN stack that allows users to register, log in, create tasks, track progress, and monitor their overall productivity. This project was developed as a major project assignment and showcases complete end-to-end application development using React, Node.js, Express, and MongoDB


Live Demo

👉 Frontend Live Link: [ https://todo-frontend-7lc2.onrender.com/]
👉 Backend Live Link (Render): [https://todo-backend-nwdi.onrender.com]


📁 GitHub Repositories

Frontend Repository: [ https://github.com/sthitapragyan53/todo-frontend]

Backend Repository: [ https://github.com/sthitapragyan53/todo-backend]


🎯 Project Objective

The goal of this project is to create a secure and efficient productivity management system where users can manage daily tasks, mark progress, and track task completion analytics.



🔐 Authentication
  -  User Registration
  - Secure Login using JWT
  - Protected Routes

📝 Task Management
 - Create tasks
 - Edit tasks
 - Delete tasks
 - Mark tasks as completed or pending

📊 Progress Tracking
  - Daily progress updates
  - Completion status
  - Visual task progress display

💾 Data Management
  - User-specific tasks stored in MongoDB
  - Backend API built with Node.js & Express

🌐 Deployment
  - Frontend and Backend hosted on Render
  - Code maintained in GitHub public repositories

🛠️ Tech Stack Used
   - Frontend
       -React.js
       -React Router
       -CSS

  - Backend
    -Express.js
    -MongoDB (Atlas)
    -Mongoose
    -JWT Authentication


Deployment
  - Render
  - GitHub


📂 Project Structure

    todo_fullstack/
        ├── my_todo/       # React frontend
        └── backend/       # Node.js backend
    - 
⚙️ Local Setup Instructions

  1️⃣ Clone the Repositories
     git clone <frontend-repo-link>
     git clone <backend-repo-link>

  2️⃣ Setup Frontend
    cd my_todo
    npm install
    npm run dev

3️⃣ Setup Backend

   cd backend
   npm install
   npm start

🔑Environment Variables

MONGO_URI=mongodb+srv://sthita:6xrnc75@todocluster.6hb2vjf.mongodb.net/my_todo_app
JWT_SECRET=group4_set

Test Credentials
Email -mohit@gmail.com
password - 1234



🧩 Challenges Faced & Solutions

  ⏳ Delayed Login on Deployment

    Reason: Render and MongoDB free tier “sleep” when inactive
    Solution: Implemented loading states and improved API request handling for smoother UX.

  - State Management Issues

     Solution: Managed using React Hooks and proper component structuring.

     CORS & API Routing Problems

     Solution: Configured CORS properly and created clean REST API routes





Conclusion

This MERN To-Do Application demonstrates my ability to build a fully functional, deployed full-stack application with authentication, CRUD operations, and real-time progress tracking. It showcases both frontend and backend development skills along with proper deployment and documentation.


















 
