import express from 'express';
import config from './config/config';
import bodyParser from 'body-parser';


const app = express();
app.use ( bodyParser.json() );

import manager from './routes/managers';
// mangers route
app.use ( '/manager' , manager);


app.get('/', (req, res) => {
    res.status(200).send({message : 'Done sending'}).end();
});

app.listen( config.port , () => {
    console.log(`Server online at port ${config.port}`);
});

export default app;
