-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2024 at 08:11 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `release_year` int(11) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `rating` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `director`, `release_year`, `genre`, `rating`) VALUES
(34, 'The Godfather Part II', 'Francis Ford Coppola', 1974, 'Crime', 9.0),
(35, 'Schindler\'s List', 'Steven Spielberg', 1994, 'Biography', 8.9),
(36, 'The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003, 'Adventure', 8.9),
(37, 'The Good, the Bad and the Ugly', 'Sergio Leone', 1966, 'Western', 8.8),
(38, '12 Angry Men', 'Sidney Lumet', 1957, 'Drama', 8.9),
(39, 'One Flew Over the Cuckoo\'s Nest', 'Milos Forman', 1975, 'Drama', 8.7),
(40, 'Inception', 'Christopher Nolan', 2010, 'Sci-Fi', 9.9),
(41, 'Fight Club', 'David Fincher', 1999, 'Drama', 8.8),
(42, 'Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime', 8.9),
(43, 'The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama', 9.3),
(44, 'Forrest Gump', 'Robert Zemeckis', 1994, 'Drama', 8.8),
(45, 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 1999, 'Sci-Fi', 8.7),
(46, 'Goodfellas', 'Martin Scorsese', 1990, 'Crime', 8.7),
(47, 'Inside Out 2', 'Kelsey Mann', 2024, 'Animation, Comedy', 8.8),
(52, 'a', 'a', 2024, 'Crime', 9.2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
