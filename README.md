# Movie-Database

Movie Database Web Application
Brief Description
The Movie Database Web Application is designed to manage and interact with a collection of movies. It provides a user-friendly interface 
to perform CRUD (Create, Read, Update, Delete) operations on the movie database. The application includes functionalities to search movies 
by title, director, release year, genre, and rating.

Key Features
Add new movies to the database.
View details of all movies.
Edit movie details.
Delete movies from the database.
Search movies by title, director, release year, genre, and rating.


Technologies Used
Backend: Node.js, Express.js
Frontend: HTML, CSS, jQuery, Bootstrap
Database: MySQL



Instructions

Running the Backend
Ensure you have Node.js and npm installed.
Navigate to the backend directory.
Install the necessary packages
Start the server using:
nodemon index.js
The server will run on http://localhost:3000.

Running the Frontend
Navigate to the frontend directory.
Open index.html in a web browser.
You should see the Movie Database web application interface.

Setting up the Database
Import the movie_db.sql file to set up the initial schema and data:
Click on the movie_db database.
Go to the Import tab.
Choose the movie_db.sql file and click Go.
Ensure that the database connection details in the backend/config.js file match your MySQL configuration.


Additional Notes
The initial dataset includes a set of movies to get you started. You can add more movies using the web interface.
