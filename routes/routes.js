import express from 'express'
import {getProducts} from "../controller/scrap.js"

const routes = express.Router()


routes.get('/products', getProducts);
 
// routes.post('/saveProduct',saveProduct);




export default routes;


