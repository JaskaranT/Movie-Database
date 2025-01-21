document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movieList');
    const homeSection = document.getElementById('home-section');
    const addSection = document.getElementById('add-section');
    const updateSection = document.getElementById('update-section');
    const deleteSection = document.getElementById('delete-section');

    // Navigation links
    document.getElementById('link-home').addEventListener('click', () => showSection(homeSection));
    document.getElementById('link-add').addEventListener('click', () => showSection(addSection));
    document.getElementById('link-update').addEventListener('click', () => showSection(updateSection));
    document.getElementById('link-delete').addEventListener('click', () => showSection(deleteSection));

    function showSection(section) {
        homeSection.style.display = 'none';
        addSection.style.display = 'none';
        updateSection.style.display = 'none';
        deleteSection.style.display = 'none';
        section.style.display = 'block';
    }

    // Fetch and display movies
    function fetchMovies() {
        fetch('http://localhost:3000/api/movies')
            .then(response => response.json())
            .then(movies => {
                movieList.innerHTML = '';
                movies.forEach(movie => {
                    const movieItem = document.createElement('li');
                    movieItem.textContent = `${movie.title} (${movie.release_year}) - ${movie.director} - ${movie.genre} - ${movie.rating}`;
                    movieList.appendChild(movieItem);
                });
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }

    // Call fetchMovies on page load
    fetchMovies();

    // Handle add movie form
    const addMovieForm = document.getElementById('addMovieForm');
    addMovieForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newMovie = {
            title: document.getElementById('title').value,
            director: document.getElementById('director').value,
            release_year: document.getElementById('releaseYear').value,
            genre: document.getElementById('genre').value,
            rating: document.getElementById('rating').value
        };

        fetch('http://localhost:3000/api/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(response => {
                if (response.ok) {
                    fetchMovies();  // Refresh the list after adding
                    addMovieForm.reset();  // Clear the form
                    showSection(homeSection);
                } else {
                    console.error('Error adding movie');
                }
            })
            .catch(error => {
                console.error('Error adding movie:', error);
            });
    });

    // Handle update movie form
    const updateMovieForm = document.getElementById('updateMovieForm');
    updateMovieForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const updatedMovie = {
            title: document.getElementById('updateTitle').value,
            director: document.getElementById('updateDirector').value,
            release_year: document.getElementById('updateReleaseYear').value,
            genre: document.getElementById('updateGenre').value,
            rating: document.getElementById('updateRating').value
        };

        fetch(`http://localhost:3000/api/movies/${updatedMovie.title}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedMovie)
        })
            .then(response => {
                if (response.ok) {
                    fetchMovies();  // Refresh the list after updating
                    updateMovieForm.reset();  // Clear the form
                    showSection(homeSection);
                } else {
                    console.error('Error updating movie');
                }
            })
            .catch(error => {
                console.error('Error updating movie:', error);
            });
    });

    // Handle delete movie form
    const deleteMovieForm = document.getElementById('deleteMovieForm');
    deleteMovieForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const titleToDelete = document.getElementById('deleteTitle').value;

        fetch(`http://localhost:3000/api/movies/${titleToDelete}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    fetchMovies();  // Refresh the list after deleting
                    deleteMovieForm.reset();  // Clear the form
                    showSection(homeSection);
                } else {
                    console.error('Error deleting movie');
                }
            })
            .catch(error => {
                console.error('Error deleting movie:', error);
            });
    });
});
