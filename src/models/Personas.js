import { DataTypes } from "sequelize";
import { sequelizee } from "../db/conexion.js";
import { Agenda } from "./Agenda.js";


export const Personas = sequelizee.define(
  "personas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellidos: {
        type: DataTypes.STRING,
      },
    edad: {
      type: DataTypes.INTEGER,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    ocupacion: {
      type: DataTypes.STRING,
  },
    direccion: {
        type: DataTypes.STRING,
    },
    ciudad: {
    type: DataTypes.STRING,
    }, 
    estado: {
        type: DataTypes.STRING,
    },  
  },
  {
    timestamps: false,
  }
);

//union de llave foranea de agenda con tabla personas
Personas.hasMany(Agenda, {
  foreigKey: 'PersonaId',
  sourceKey: 'id'
})

//creacion de llave foranea de la tabla agenda para conectar con Personas
Agenda.belongsTo(Personas,{
  foreigKey: 'PersonaId',
  targetId: 'id'
})