/* Replace with your SQL commands */
CREATE TABLE teachers (
    NAME VARCHAR(100) NOT NULL,
    START_DATE date DEFAULT now(),
    END_DATE date DEFAULT NULL
    SALARY INT NOT NULL,
    teacher_id INT PRIMARY KEY
);