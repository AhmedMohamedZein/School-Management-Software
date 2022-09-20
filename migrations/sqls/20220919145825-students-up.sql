/* Replace with your SQL commands */
/* end date should be filed when the student graduated or exits the school */
CREATE TABLE students (
    NAME VARCHAR(70) NOT NULL,
    START_DATE date DEFAULT now(),
    END_DATE date DEFAULT NULL,
    PHONE_NUMBER VARCHAR(15) DEFAULT NULL,
    EMAIL VARCHAR(30) NOT NULL,
    STUDENT_ID INT PRIMARY KEY
    /* STUDENT_ID should be the national id*/
);
