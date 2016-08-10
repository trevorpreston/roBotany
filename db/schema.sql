DROP TABLE IF EXISTS plant_data;
DROP TABLE IF EXISTS users;

--create the table for users--
CREATE TABLE plant_data (
  plant_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  frequency INT NOT NULL
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR NOT NULL,
  email VARCHAR unique NOT NULL,
  password_digest TEXT,
  address VARCHAR NOT NULL,
  zipcode INT NOT NULL,
  saved_plants INT[],
  active_plant INT
);
