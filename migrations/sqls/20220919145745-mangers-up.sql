/* Replace with your SQL commands */
CREATE TABLE mangers (
    NAME VARCHAR (100) NOT NULL,
    START_DATE date DEFAULT now(),
    END_DATE date DEFAULT NULL,
    SALARY INT NOT NULL, 
    MANGER_ID INT PRIMARY KEY
);