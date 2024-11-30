CREATE DATABASE fms;
CREATE TABLE users(
    user_email SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
INSERT INTO vehicles (type, registration, status, location, user_id)
VALUES ('Truck', 'AGE 5465', 'active', 'Mabvuku', 2),
    ('Van', 'ACB9913', 'idle', 'Tafara', 3)
RETURNING *;