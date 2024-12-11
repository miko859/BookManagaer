CREATE DATABASE IF NOT EXISTS `BookManager`;

USE `BookManager`; 

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `status` VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `author` VARCHAR(100) NOT NULL,
    `isbn` VARCHAR(8) NOT NULL,
    `status_id` INT,
    FOREIGN KEY (`status_id`) REFERENCES status(id)
);

INSERT INTO `status` (`status`)
VALUES 
    ('AVAILABLE'),
    ('BORROWED');


INSERT INTO `users` (`username`, `password`, `role`)
VALUES 
    ('johndoe', 'password123', 'ROLE_USER'),
    ('janedoe', 'securepass', 'ROLE_USER'),
    ('alicew', 'alicepass', 'ROLE_USER'),
    ('bobsmith', 'bobsecure', 'ROLE_USER'),
    ('charliebrown', 'charlie123', 'ROLE_USER');

INSERT INTO `books` (`id`, `title`, `author`, `isbn`, `status_id`) VALUES
(1, 'To Kill a Mockingbird', 'Harper Lee', '12345678', 1),
(2, '1984', 'George Orwell', '23456789', 2),
(3, 'The Great Gatsby', 'F. Scott Fitzgerald', '34567890', 1),
(4, 'The Catcher in the Rye', 'J.D. Salinger', '45678901', 2),
(5, 'Moby-Dick', 'Herman Melville', '56789012', 1),
(6, 'Pride and Prejudice', 'Jane Austen', '67890123', 2),
(7, 'War and Peace', 'Leo Tolstoy', '78901234', 1),
(8, 'The Odyssey', 'Homer', '89012345', 2),
(9, 'Crime and Punishment', 'Fyodor Dostoevsky', '90123456', 1),
(10, 'The Brothers Karamazov', 'Fyodor Dostoevsky', '01234567', 2),
(11, 'Brave New World', 'Aldous Huxley', '12345678', 1),
(12, 'The Hobbit', 'J.R.R. Tolkien', '23456789', 2),
(13, 'Les Misérables', 'Victor Hugo', '34567890', 1),
(14, 'Don Quixote', 'Miguel de Cervantes', '45678901', 2),
(15, 'The Divine Comedy', 'Dante Alighieri', '56789012', 1);