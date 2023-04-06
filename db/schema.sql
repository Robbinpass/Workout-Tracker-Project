DROP DATABASE IF EXISTS workout_db;
CREATE DATABASE workout_db;

USE workout_db;

CREATE TABLE people (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  First_name VARCHAR(30) NOT NULL,
  Last_name VARCHAR(30) NOT NULL,
  Username VARCHAR(30) NOT NULL,
  Passwords VARCHAR(30) NOT NULL
);

CREATE TABLE exercise (
    People_id INT,
    Target_Muscles VARCHAR(30) NOT NULL,
    Lifting_Weight INT,
    Reps INT NOT NULL
    Sets INT NOT NULL
);
