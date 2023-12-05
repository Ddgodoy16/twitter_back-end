import Express  from "express";
const users = Express();
import { createUser } from "../controllers/controller_crear_usuario.js";

users.post('', createUser);


export {

    users

}