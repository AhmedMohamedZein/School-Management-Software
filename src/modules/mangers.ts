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
            return returnedData.rows ;
        }
        catch (error) {
            console.log (`error happend in managersConnectionDB-> index ${error}`);
            return new Error (`Error message : ${error}`);
        }
    }




}


export {manager , managersConnectionDB} ;