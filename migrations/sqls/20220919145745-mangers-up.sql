/* Replace with your SQL commands */
CREATE TABLE managers (
    NAME VARCHAR (100) NOT NULL,
    START_DATE date DEFAULT now(),
    END_DATE date DEFAULT NULL,
    SALARY INT NOT NULL, 
    MANAGER_ID INT PRIMARY KEY
);