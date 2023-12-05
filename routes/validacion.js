import Express  from "express";
const validar = Express();
import { validacion, validarCookieActiva } from "../controllers/controller_validacion.js";
import { validarCookie } from "../cookie/cookie.js";

validar.post( '',  validacion);
validar.get('', validarCookie, validarCookieActiva );

export {
    validar
}