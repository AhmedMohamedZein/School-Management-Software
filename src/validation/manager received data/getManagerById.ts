import { Response , Request , NextFunction } from "express";


export default async function idValidation(req : Request , res : Response , next : NextFunction) {

    if ( !Number(req.params.id) || Number(req.params.id) < 0 ) {
        res.status(400).send('ID params is invalid number').end();
        return;
    }
    next();
}