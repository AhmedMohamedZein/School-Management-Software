import express , { Application  , Request , Response } from 'express';
import config from './config/config';
import bodyParser from 'body-parser';


const app : Application = express();
app.use ( bodyParser.json() );

import manager from './routes/managers';
// mangers route
app.use ( '/manager' , manager);


app.get('/', (req : Request , res : Response) => {
    res.status(200).send({message : 'Done sending'}).end();
});

app.listen( config.port , () => {
    console.log(`Server online at port ${config.port}`);
});

export default app;
