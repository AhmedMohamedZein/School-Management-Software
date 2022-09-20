/* Replace with your SQL commands */
CREATE TABLE subject_teacher_student (

    SUBJECT_ID INT REFERENCES subjects (SUBJECT_ID) NOT NULL,
    TEACHER_ID INT REFERENCES teachers (TEACHER_ID) NOT NULL,
    MARK INT DEFAULT NULL
);