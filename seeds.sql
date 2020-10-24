USE passportmern;
set foreign_key_checks=0;

-- --------------------------------------------------------
--
-- Seed data for users
--
TRUNCATE TABLE users;

INSERT INTO users (username, password, accessId) VALUES

('admin', '$2b$10$Qf/0VNBQiYr.pHN8IN9Yl.SrYQCpG4b2mrsX6dx85DkE7/fwsNWvy', 3),
('manager', '$2b$10$2ataQ4kjDbZaR9TDSUqXI.Mt.Gq/bDn1Te3MN939s3fJAtTrKJa9i', 2),
('vince', '$2b$10$HEj.issBvH6pxDEiBxtCr.c8fU7Cl4TC34K4/MGtTMdXqztLyqt8K', 3),
('user', '$2b$10$rnUz2cFk61G27KdixeR5G.rf78zaKzDZlebrs9ZK5tnnVGFWrnUPm', 1);
-- username: username:admin pw admin
-- username:manager pw 123456
-- username:vince pw 654321
-- username:user pw 123123

-- --------------------------------------------------------
--
-- Seed data for accessLevels
--
TRUNCATE TABLE accessLevels;

INSERT INTO accessLevels (permissionLevel, type) VALUES
(1, 'Employee'),
(2, 'Manager'),
(3, 'Administrator');

-- --------------------------------------------------------

set foreign_key_checks=1;