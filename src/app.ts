import express from 'express';
import config from './config/config';

const app = express();


app.get('/', (req, res) => {
    res.status(200).send('Done sending').end();
});

app.listen( config.port , () => {
    console.log(`Server online at port ${config.port}`);
});

export default app;
