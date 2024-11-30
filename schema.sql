DROP DATABASE IF EXISTS DnD;

CREATE DATABASE DnD;

USE DnD;

CREATE TABLE favorites
  (id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name JSON);



-- mysql -u root < path/to/schema.sql.