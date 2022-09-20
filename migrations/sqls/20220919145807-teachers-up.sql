/* Replace with your SQL commands */
CREATE TABLE teachers (
    NAME VARCHAR(70) NOT NULL,
    START_DATE date DEFAULT now(),
    END_DATE date DEFAULT NULL,
    SALARY INT NOT NULL,
    TEACHER_ID INT PRIMARY KEY
);