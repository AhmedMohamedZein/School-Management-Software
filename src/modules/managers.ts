import client from '../database';

type manager = {
    name ?: string ,
    salary ?: Number,
    manager_id : string
}

class managersConnectionDB {

    async index () : Promise< manager[] | Error> {
        try {
            const conn = await client.connect() ; 
            const sql = 'SELECT * FROM managers';
            const returnedData = await conn.query (sql) ;
            conn.release();
            return returnedData.rows ;
        }
        catch (error) {
            console.log (`error happend in managersConnectionDB-> index ${error}`);
            return new Error (`Error message : ${error}`);
        }
    }

    async show (requestedManager : manager) : Promise<manager | Error> {
        try {
            const conn = await client.connect() ; 
            const sql = 'SELECT * FROM managers WHERE MANAGER_ID = $1';
            const returnedData = await conn.query (sql , [ requestedManager.manager_id ] ) ;
            conn.release();
            return returnedData.rows[0] ;
        }
        catch (error) {
            console.log (`error happend in managersConnectionDB-> show ${error}`);
            return new Error (`Error message : ${error}`);
        }
    }
    async create (requestedManager : manager) : Promise<void | Error> {

        try {
            const conn = await client.connect() ; 
            const sql = 'INSERT INTO managers (name,salary,manager_id) VALUES ($1,$2,$3)';
            const returnedData = await conn.query (sql , [ requestedManager.name, requestedManager.salary, requestedManager.manager_id] ) ;
            if ( !returnedData.rowCount) {
                throw new Error ('Invalid input variables');
            }
        }
        catch (error) {
            console.log (`error happend in managersConnectionDB-> create ${error}`);
            return new Error (`Error message : ${error}`);      
        }

    }
}


export {manager , managersConnectionDB} ;