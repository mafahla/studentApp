-- dropping the table if it exists
DROP TABLE IF EXISTS users CASCADE;

-- creating a table of student
CREATE TABLE student(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30),
    cell_phone VARCHAR(15),
    course VARCHAR(30),
 
)

-- we are sececting to see what is inside the table we created
SELECT * FROM student; 

-- inserting inside the created table
INSERT INTO student (
    name, email, cell_phone, course)
    INTO ( "Kgopotso", "kgopotso@gmail.com", "072 456 2345", "Tex");
