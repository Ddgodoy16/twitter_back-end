import Express from "express";
import { createPosts, getPost } from "../controllers/controller_publicaciones.js";
import multer from "multer";

const publicacion = Express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

publicacion.post(''  ,  upload.single('imagen') ,  createPosts);
publicacion.get('', getPost);

export {
  publicacion
}