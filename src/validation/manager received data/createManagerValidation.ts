import { Response , Request , NextFunction } from "express";


export default async function bodyValidation(req : Request , res : Response , next : NextFunction  ) {
    
    if (  !req.body.name  ) {
        res.status(400).send('request body dont have a name variable !').end();
        return;
    }
    if ( !req.body.salary || !Number(req.body.salary) ){
        res.status(400).send('request body dont have a salary variable or its missing !').end();
        return; 
    }
    if ( !req.body.manager_id ) {
        res.status(400).send('request body dont have a manager_id variable or its invalid number !').end();
        return;  
    }

    next();
}