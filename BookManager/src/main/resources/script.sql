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
    `isbn` VARCHAR(50) NOT NULL,
    `status_id` INT,
    FOREIGN KEY (`status_id`) REFERENCES status(id)
);