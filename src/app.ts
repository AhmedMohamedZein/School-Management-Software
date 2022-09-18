import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).send('Done sending').end();
});

app.listen(port, () => {
    console.log(`Server online at port ${port}`);
});

export default app;
