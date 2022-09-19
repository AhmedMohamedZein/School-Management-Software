import { Pool } from 'pg';
import config from './config/config';


const client = new Pool ({

    host : config.databaseHost,
    database : config.databaseName,
    user : config.databaseUser,
    password: config.databasePassword

});

export default client ;