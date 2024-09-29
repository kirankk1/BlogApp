# Kiran's Blog

[Visit the live site](https://blogapp-znn5.onrender.com/)

Kiran's Blog is a blogging platform built using the MERN stack, integrated with Google OAuth. It allows users to view blog posts related to coding and web development, while only the admin has the authority to create and update posts. 

## Features

### User Features
- View all blog posts hosted by the admin.
- Like and comment on blog posts.
- Edit user comments.

### Admin Features
- Full control to **create**, **update**, and **delete** blog posts.
- Admin-exclusive access for managing all site content.

### Authentication
- Google OAuth integration allows users to sign in with their Google accounts.
- Only authenticated users can post and edit comments.

## Technologies Used

### Frontend
- **React.js**: A popular JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A fast development server and build tool for modern web projects.

### Backend
- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database used to store user and blog post data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

### Authentication
- **Google OAuth 2.0**: Used for secure user authentication.

## Folder Structure

├── backend 
 ├── controllers 
 ├── models 
 ├── routes 
 ├── .env (create manually) 
 ├── server.js 
 └── package.json 
├── client 
  ├── index.js 
  ├── src 
  ├── tailwind.config.js  
  ├── vite.config.js 
  └── package.json 
  └── README.md



## Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

MONGO_URI=your-mongodb-connection-string GOOGLE_CLIENT_ID=your-google-client-id GOOGLE_CLIENT_SECRET=your-google-client-secret


These credentials are required for connecting to MongoDB and enabling Google OAuth.

## Installation and Setup

### 1. Clone the repository:

git clone https://github.com/your-username/kirans-blog.git
2. Install Dependencies:
Backend:
bash
  
    cd backend
    npm install

Frontend:
bash

    cd client
    npm install
3. Configure the .env file:
Populate the .env file with your MongoDB and Google OAuth credentials.

4. Run the Application:

Backend:
bash

    cd backend
    npm run dev
Frontend:
bash
    
    cd client
    npm run dev
    
The application should now be running on http://localhost:3000 (client) and http://localhost:5000 (backend).

Usage
Users can browse posts hosted by the admin.
Admins can log in using Google OAuth and create, edit, or delete posts.
Users can comment on posts, and edit their own comments after signing in.
Deployment
To deploy the application, follow the same installation process on your hosting platform, such as Render or Heroku. Make sure to set your environment variables on the platform's dashboard.

Contributing
Contributions are welcome! Feel free to open issues for bugs or feature requests, or fork the repository and submit pull requests.

License
This project is licensed under the MIT License.

Author: Kiran


This version consolidates all information in a single file for easy use and understanding. You can modify URLs, paths, or any other details specific to your deployment.
