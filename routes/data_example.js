import Express  from "express";
const dataExample = Express();
import {dataExamplePost} from '../controllers/Controller_data_example.js';
import {validarCookie} from '../cookie/cookie.js';

dataExample.post('', validarCookie, dataExamplePost);



export {
    dataExample
}