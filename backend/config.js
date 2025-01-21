
// db.js
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "movie_db",
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: ", err.stack);
        process.exit(1);
    }
    console.log("Connected to database: movie_db");
});

module.exports = db;
