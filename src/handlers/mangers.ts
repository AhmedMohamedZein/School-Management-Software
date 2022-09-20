import { Application , Response , Request } from 'express';
import { manager , managersConnectionDB } from '../modules/mangers';


const mangerHandler = async ( app : Application ) : Promise<void> => {
    app.get ('/managers', index);
    // this endpint will return all mangers 
    // it will be helpful in the front page of the websit


}

async function index( req : Request , res : Response ) : Promise<void>{
    
    try {
        const managers =  new managersConnectionDB();
        const requestedData = await managers.index();
        res.status(200).json( requestedData ).end();
        return;
    }
    catch (error) {
        res.status(500).json('server error 500').end();
        return;
    }

}


export default mangerHandler ;