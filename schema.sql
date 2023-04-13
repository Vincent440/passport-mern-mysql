-- DROP DATABASE IF EXISTS passportmern;
-- CREATE DATABASE passportmern;
-- USE passportmern;

set foreign_key_checks=0;

-- --------------------------------------------------------

CREATE TABLE users (
    userId int NOT NULL AUTO_INCREMENT,
    username varchar(20) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    accessId int NOT NULL,
    FOREIGN KEY (accessId) REFERENCES accessLevels(permissionLevel) ON DELETE RESTRICT ON UPDATE CASCADE,
    active boolean DEFAULT 1,
    PRIMARY KEY (userId)
);

-- --------------------------------------------------------

CREATE TABLE accessLevels (
    permissionLevel int NOT NULL AUTO_INCREMENT,
    type varchar(30) NOT NULL,
    PRIMARY KEY (permissionLevel)
);

set foreign_key_checks=1;