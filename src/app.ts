import express from 'express';
import config from './config/config';
import managersHandler from './handlers/mangers';
import bodyParser from 'body-parser';

const app = express();
app.use ( bodyParser.json() );

// mangers end-point 
managersHandler(app);

app.get('/', (req, res) => {
    res.status(200).send({message : 'Done sending'}).end();
});

app.listen( config.port , () => {
    console.log(`Server online at port ${config.port}`);
});

export default app;
