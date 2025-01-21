const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movie_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database: movie_db');
});

 
// GET all movies
app.get('/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error('Error fetching movies: ', err);
            res.status(500).send('Error fetching movies');
            return;
        }
        res.json(results);
    });
});



// GET a movie by ID
app.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    db.query('SELECT * FROM movies WHERE id = ?', [movieId], (err, results) => {
        if (err) {
            console.error('Error fetching movie: ', err);
            res.status(500).send('Error fetching movie');
            return;
        }
        res.json(results[0]);
    });
});

// POST a new movie
app.post('/movies', (req, res) => {
    const newMovie = req.body;
    db.query('INSERT INTO movies SET ?', newMovie, (err, results) => {
        if (err) {
            console.error('Error adding movie: ', err);
            res.status(500).send('Error adding movie');
            return;
        }
        res.status(201).send(`Movie added with ID: ${results.insertId}`);
    });
});

// PUT update a movie by ID
app.put('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const updatedMovie = req.body;
    db.query('UPDATE movies SET ? WHERE id = ?', [updatedMovie, movieId], (err, results) => {
        if (err) {
            console.error('Error updating movie: ', err);
            res.status(500).send('Error updating movie');
            return;
        }
        res.send(`Movie updated with ID: ${movieId}`);
    });
});

app.put('/movies/:title', (req, res) => {
    const title = req.params.title;
    const { rating } = req.body;
    const query = 'UPDATE movies SET rating = ? WHERE title = ?';
    db.query(query, [rating, title], (err, result) => {
        if (err) {
            console.error('Error updating rating:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('Movie not found');
            return;
        }
        res.send(`Rating updated successfully for movie: ${title}`);
    });
});



// DELETE a movie by ID
app.delete('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    db.query('DELETE FROM movies WHERE id = ?', [movieId], (err, results) => {
        if (err) {
            console.error('Error deleting movie: ', err);
            res.status(500).send('Error deleting movie');
            return;
        }
        res.send(`Movie deleted with ID: ${movieId}`);
    });
});

// GET movies by rating
app.get('/movies/rating/:rating', (req, res) => {
    const rating = req.params.rating;
    db.query('SELECT * FROM movies WHERE rating = ?', [rating], (err, results) => {
        if (err) {
            console.error('Error fetching movies by rating: ', err);
            res.status(500).send('Error fetching movies by rating');
            return;
        }
        res.json(results);
    });
});

// GET movies by year
app.get('/movies/year/:year', (req, res) => {
    const year = req.params.year;
    db.query('SELECT * FROM movies WHERE release_year = ?', [year], (err, results) => {
        if (err) {
            console.error('Error fetching movies by year: ', err);
            res.status(500).send('Error fetching movies by year');
            return;
        }
        res.json(results);
    });
});

// GET movies by director
app.get('/movies/director/:director', (req, res) => {
    const director = req.params.director;
    db.query('SELECT * FROM movies WHERE director = ?', [director], (err, results) => {
        if (err) {
            console.error('Error fetching movies by director: ', err);
            res.status(500).send('Error fetching movies by director');
            return;
        }
        res.json(results);
    });
});

// GET movies by title
app.get('/movies/title/:title', (req, res) => {
    const title = req.params.title;
    db.query('SELECT * FROM movies WHERE title LIKE ?', [`%${title}%`], (err, results) => {
        if (err) {
            console.error('Error fetching movies by title: ', err);
            res.status(500).send('Error fetching movies by title');
            return;
        }
        res.json(results);
    });
});

// GET movies by genre
app.get('/movies/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    db.query('SELECT * FROM movies WHERE genre = ?', [genre], (err, results) => {
        if (err) {
            console.error('Error fetching movies by genre: ', err);
            res.status(500).send('Error fetching movies by genre');
            return;
        }
        res.json(results);
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
