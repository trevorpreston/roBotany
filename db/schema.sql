DROP TABLE IF EXISTS plant_data;

--create the table for users--
CREATE TABLE plant_data (
  plant_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  frequency INT NOT NULL
);
