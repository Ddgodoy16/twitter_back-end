import express from "express";
import { users } from "./routes/crear_usuario.js";
import { validar } from "./routes/validacion.js";
import { publicacion } from "./routes/publicaciones.js";
import { dataExample } from "./routes/data_example.js";
import cookieParser from "cookie-parser";
import path from 'path';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true
}

app.use(cors(corsOptions));

app.use('/api/crear_usuario', users);
app.use('/api/validacion',  validar);
app.use('/api/publicacion', publicacion);
app.use('/api/dataExample',   dataExample);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(4000, () => {

});
