SELECT *
FROM personas
RIGHT JOIN ciudades
ON personas.ciudad_id = ciudades.id
WHERE personas.ciudad_id IS NULL;

-- SELECT *
-- FROM personas
-- INNER JOIN ciudades
-- ON personas.ciudad_id = ciudades.id;

-- SELECT * FROM personas
-- WHERE NOT (apellido = 'Simpsons');

-- SELECT * FROM personas
-- WHERE rating > 8 AND nombre = 'Marge';

-- UPDATE personas
-- SET ciudad_id = 10
-- WHERE NOT (nombre = 'Homero');

-- ALTER TABLE personas
-- ADD COLUMN ciudad_id INTEGER,
-- ADD CONSTRAINT fk_ciudad
-- FOREIGN KEY (ciudad_id) REFERENCES ciudades(id);

-- DELETE FROM personas WHERE id = 4;

-- UPDATE personas 
-- SET apellido = 'Simpsons'
-- WHERE apellido = 'Simpson';

-- SELECT apellido,
-- COUNT(*) as cantidad_personas
-- FROM personas
-- GROUP BY apellido;

-- SELECT * FROM personas WHERE rating > 8 ORDER BY nombre DESC;

-- INSERT INTO personas (apellido, nombre, rating)
-- VALUES ('Simpsons', 'Lisa', 8), ('Simpsons', 'Bart', 7);
-- INSERT INTO ciudades (id, nombre) VALUES (10, 'Springfield');
-- INSERT INTO ciudades (nombre) VALUES ('Malaga');

-- CREATE TABLE personas
-- (
--   id SERIAL PRIMARY KEY,
--   apellido VARCHAR(255) NOT NULL,
--   nombre VARCHAR(255) UNIQUE,
--   rating INTEGER,
--   CONSTRAINT check_rating CHECK (rating >= 0 AND rating <= 10)
-- );