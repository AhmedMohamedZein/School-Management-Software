import { Router , Response , Request } from 'express';
import { manager , managersConnectionDB } from '../modules/managers';
import bodyValidation from '../validation/manager received data/createManagerValidation';
import idValidation from '../validation/manager received data/getManagerById';
const managersHandler = async ( app : Router ) : Promise<void> => {
    // this endpint will return all mangers 
    // it will be helpful in the front page of the websit
    app.get ('/', index);
    // the managers by id will be used by the internal system to get the manager after authrization and authentication 
    app.get('/:id' , idValidation , show);
    // this will create a manager in the database but it will go throw sevrel middelware validation
    // the only one that can create a manager is anther manager only !!
    app.post('/' , bodyValidation , create);
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
        if ( !requestedData ) {
            res.status(400).send('This id does not exist !').end();
            return;
        }
        res.status(200).json( requestedData ).end();
        return;
    }
    catch (error) {
        res.status(500).json('server error 500').end();
        return;
    }

}

async function create ( req : Request , res : Response ) : Promise<void> {

    // the schema of the manager is {  "name" , "salary" , "manager_id" }
    // so we need to be expected a 3 values 
    const requestedManager : manager = {
        name : req.body.name , 
        salary : req.body.salary ,
        manager_id : req.body.manager_id
    };

    try {
        const manager = new managersConnectionDB ();
        const requestedData = await manager.create(requestedManager);
        res.status(201).send('manager has been created').end();
        return;

    }catch {
        res.status (500).send ('server error 500').end ();
    }
}


export default managersHandler ;