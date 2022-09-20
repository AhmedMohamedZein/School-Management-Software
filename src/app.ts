import express from 'express';
import config from './config/config';
import mangerHandler from './handlers/mangers';
const app = express();

// mangers end-point 
mangerHandler(app);

app.get('/', (req, res) => {
    res.status(200).send({message : 'Done sending'}).end();
});

app.listen( config.port , () => {
    console.log(`Server online at port ${config.port}`);
});

export default app;
