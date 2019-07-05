DROP DATABASE IF EXISTS passportmern;
CREATE DATABASE passportmern;
USE passportmern;

set foreign_key_checks=0;

-- --------------------------------------------------------

CREATE TABLE users (
    user_id int(6) NOT NULL AUTO_INCREMENT,
    username varchar(20) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    access_id int(3) NOT NULL,
    FOREIGN KEY (access_id) REFERENCES access_levels(access_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    active boolean DEFAULT 1,
    PRIMARY KEY (user_id)
);

-- --------------------------------------------------------

CREATE TABLE access_levels (
    access_id int(3) NOT NULL AUTO_INCREMENT,
    type varchar(30) NOT NULL,
    PRIMARY KEY (access_id)
);

set foreign_key_checks=1;