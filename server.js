import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

//importamos la función de conexión a base de datos
import conectarDB from './database/conexion.js';

//ejecutamos la función de conexión a base de datos
conectarDB();

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`);
});
