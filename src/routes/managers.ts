import express from 'express';
import managersHandler from '../handlers/managers';
const route = express.Router();


// route.use (  authurization  , authentication )

managersHandler ( route ) ;


export default route ;