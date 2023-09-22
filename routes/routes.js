import express from 'express'
import {getProducts} from "../controller/scrap.js"
// import { scrapeAmazonHomeDecor } from '../index.js';

const routes = express.Router()


routes.get('/products', getProducts);
 
 



export default routes;


