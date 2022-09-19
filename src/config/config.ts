import dotenv from 'dotenv';
dotenv.config();

const configuration = {
    port  : process.env.PORT || 8000 ,
    databaseHost : process.env.DATABASE_HOST,
    databaseName :  process.env.DATABASE_NAME,
    databaseUser : process.env.DATABASE_USER,
    databasePassword :  process.env.DATABASE_PASSWORD
}


export default configuration ;

