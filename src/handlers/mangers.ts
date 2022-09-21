import { Application , Response , Request } from 'express';
import { manager , managersConnectionDB } from '../modules/mangers';


const mangerHandler = async ( app : Application ) : Promise<void> => {
    // this endpint will return all mangers 
    // it will be helpful in the front page of the websit
    app.get ('/managers', index);
    // the managers by id will be used by the internal system to get the manager after authrization and authentication 
    app.get('/managers/:id', show);

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

async function show( req : Request , res : Response ) : Promise<void>{
    const requestedManager : manager = { 
        manager_id : req.params.id
    };
    try {
        const managers =  new managersConnectionDB();
        const requestedData = await managers.show(requestedManager);
        res.status(200).json( requestedData ).end();
        return;
    }
    catch (error) {
        res.status(500).json('server error 500').end();
        return;
    }

}

export default mangerHandler ;