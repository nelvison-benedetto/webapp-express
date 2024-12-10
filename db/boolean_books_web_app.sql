-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: boolean_books_web_app
-- ------------------------------------------------------
-- Server version 5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `publication_year` year(4) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
INSERT INTO `books` VALUES 
(1, '1984', 'George Orwell', 'Dystopian', 1949, 'A chilling depiction of a totalitarian society under constant surveillance.', NULL, NOW(), NOW()),
(2, 'To Kill a Mockingbird', 'Harper Lee', 'Classic', 1960, 'A young girl navigates issues of race and morality in the American South.', NULL, NOW(), NOW()),
(3, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925, 'The tragic story of Jay Gatsby and his unrequited love for Daisy Buchanan.', NULL, NOW(), NOW()),
(4, 'Moby-Dick', 'Herman Melville', 'Adventure', 1851, 'The epic tale of Captain Ahab\'s obsessive quest to kill the white whale.', NULL, NOW(), NOW()),
(5, 'Pride and Prejudice', 'Jane Austen', 'Romance', 1813, 'A romantic comedy about the manners and matrimony of the British gentry.', NULL, NOW(), NOW());
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rating` tinyint(4) NOT NULL CHECK (`rating` BETWEEN 1 AND 5),
  `review` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_book` (`book_id`),
  CONSTRAINT `fk_book` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
INSERT INTO `reviews` VALUES 
(1, 1, 'Alice', 5, 'A timeless masterpiece that remains relevant today.', NOW(), NOW()),
(2, 1, 'Bob', 4, 'Thought-provoking and unsettling.', NOW(), NOW()),
(3, 2, 'Charlie', 5, 'A moving and inspiring story.', NOW(), NOW()),
(4, 2, 'Diana', 5, 'An unforgettable portrayal of justice and empathy.', NOW(), NOW()),
(5, 3, 'Eve', 4, 'Beautifully written, though a bit slow in parts.', NOW(), NOW()),
(6, 3, 'Frank', 5, 'A poignant and tragic exploration of the American dream.', NOW(), NOW()),
(7, 4, 'Grace', 4, 'A challenging read, but well worth it.', NOW(), NOW()),
(8, 5, 'Hank', 5, 'A witty and charming tale of love and social norms.', NOW(), NOW());
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed.
