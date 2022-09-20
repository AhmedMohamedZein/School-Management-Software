import { Pool } from 'pg';
import config from './config/config';


const client = new Pool ({

    host : config.databaseHost,
    database : config.databaseName,
    user : config.databaseUser,
    password: config.databasePassword,
    port : Number (config.databasePort)
});

export default client ;