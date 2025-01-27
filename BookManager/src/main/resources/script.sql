CREATE DATABASE IF NOT EXISTS `BookManager`;

USE `BookManager`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(20) NOT NULL
);

INSERT INTO `users` (`username`, `password`, `role`)
VALUES 
    ('johndoe', 'password123', 'USER'),
    ('janedoe', 'securepass', 'USER'),
    ('alicew', 'alicepass', 'USER'),
    ('bobsmith', 'bobsecure', 'USER'),
    ('charliebrown', 'charlie123', 'USER'),
    ('michaelj', 'michaelpass', 'USER'),
    ('sarahk', 'sarahsecure', 'USER'),
    ('robertp', 'robertpass', 'USER'),
    ('emilyd', 'emilypass', 'USER'),
    ('davidh', 'davidsecure', 'USER'),
    ('lauraw', 'laurapass', 'USER'),
    ('oliverb', 'oliversecure', 'USER'),
    ('lilyt', 'lilypass', 'USER'),
    ('benjaminc', 'benjaminsecure', 'USER'),
    ('noahg', 'noahpass', 'USER'),
    ('ada', 'admin1', 'ADMIN'),
    ('mato', 'admin2', 'ADMIN');

DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `status` VARCHAR(20) NOT NULL
);
INSERT INTO `status` (`status`)
VALUES 
    ('AVAILABLE'),
    ('BORROWED');

CREATE UNIQUE INDEX idx_status ON `status`(`status`);

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `author` VARCHAR(100) NOT NULL,
    `isbn` INT NOT NULL,
    `status_id` INT,
    FOREIGN KEY (`status_id`) REFERENCES `status`(`id`)
);

INSERT INTO `books` (`title`, `author`, `isbn`, `status_id`) VALUES
('To Kill a Mockingbird', 'Harper Lee', 12345678, 1),
('1984', 'George Orwell', 23456789, 2),
('Pride and Prejudice', 'Jane Austen', 34567890, 1),
('The Great Gatsby', 'F. Scott Fitzgerald', 45678901, 2),
('Moby Dick', 'Herman Melville', 56789012, 1),
('War and Peace', 'Leo Tolstoy', 67890123, 2),
('The Catcher in the Rye', 'J.D. Salinger', 78901234, 1),
('The Hobbit', 'J.R.R. Tolkien', 89012345, 2),
('Little Women', 'Louisa May Alcott', 90123456, 1),
('Jane Eyre', 'Charlotte Bronte', 11223344, 2),
('The Lord of the Rings', 'J.R.R. Tolkien', 22334455, 1),
('Brave New World', 'Aldous Huxley', 33445566, 2),
('Fahrenheit 451', 'Ray Bradbury', 44556677, 1),
('Wuthering Heights', 'Emily Bronte', 55667788, 2),
('Animal Farm', 'George Orwell', 66778899, 1),
('Crime and Punishment', 'Fyodor Dostoevsky', 77889900, 2),
('The Brothers Karamazov', 'Fyodor Dostoevsky', 88990011, 1),
('The Picture of Dorian Gray', 'Oscar Wilde', 99001122, 2),
('Great Expectations', 'Charles Dickens', 10101010, 1),
('A Tale of Two Cities', 'Charles Dickens', 12121212, 2),
('The Grapes of Wrath', 'John Steinbeck', 13131313, 1),
('Of Mice and Men', 'John Steinbeck', 14141414, 2),
('Dracula', 'Bram Stoker', 15151515, 1),
('Frankenstein', 'Mary Shelley', 16161616, 2),
('The Odyssey', 'Homer', 17171717, 1),
('The Iliad', 'Homer', 18181818, 2),
('The Count of Monte Cristo', 'Alexandre Dumas', 19191919, 1),
('Les Miserables', 'Victor Hugo', 20202020, 2),
('Don Quixote', 'Miguel de Cervantes', 21212121, 1),
('The Alchemist', 'Paulo Coelho', 22222222, 2),
('The Road', 'Cormac McCarthy', 23232323, 1),
('The Book Thief', 'Markus Zusak', 24242424, 2),
('A Clockwork Orange', 'Anthony Burgess', 25252525, 1),
('The Kite Runner', 'Khaled Hosseini', 26262626, 2),
('Life of Pi', 'Yann Martel', 27272727, 1),
('The Hunger Games', 'Suzanne Collins', 28282828, 2),
('Divergent', 'Veronica Roth', 29292929, 1),
('The Maze Runner', 'James Dashner', 30303030, 2),
('Twilight', 'Stephenie Meyer', 31313131, 1),
('New Moon', 'Stephenie Meyer', 32323232, 2),
('Eclipse', 'Stephenie Meyer', 33333333, 1),
('Breaking Dawn', 'Stephenie Meyer', 34343434, 2),
('The Shining', 'Stephen King', 35353535, 1),
('IT', 'Stephen King', 36363636, 2),
('Carrie', 'Stephen King', 37373737, 1),
('The Stand', 'Stephen King', 38383838, 2),
('Misery', 'Stephen King', 39393939, 1),
('Pet Sematary', 'Stephen King', 40404040, 2);
