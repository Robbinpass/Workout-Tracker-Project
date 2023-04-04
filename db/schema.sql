DROP DATABASE IF EXISTS Workout_db;
CREATE DATABASE Workout_db;

USE Workout_db;

CREATE TABLE People (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Fisrt_name VARCHAR(30) NOT NULL,
  Last_name VARCHAR(30) NOT NULL,
  Username VARCHAR(30) NOT NULL,
  Passwords VARCHAR(30) NOT NULL
);

CREATE TABLE Exercise (
    People_id INT,
    Target_Muscles VARCHAR(30) NOT NULL,
    Lifting_Weight INT,
    Reps INT NOT NULL
    Sets INT NOT NULL
);
