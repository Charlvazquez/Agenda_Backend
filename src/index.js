
import app from "./server.js";
import { sequelizee } from "./db/conexion.js";
//usar estos comandos para importar bdd en postgresql si aun no se crean las tablas
/*
import './models/Categoria.js';
import './models/Personas.js';
import './models/Agenda.js'
*/
const port = 4020;

async function main(){
   try {
    await sequelizee.sync({force:false})
    console.log('Conexion con base de datos');
    app.listen(port)
    console.log(`Servidor en http://localhost:${port}`);
   } catch (error) {
      console.log('Ha habido un problema con la conexion de base de datos') 
   }
}

main();
