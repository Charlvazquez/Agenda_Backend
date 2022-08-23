import { DataTypes } from "sequelize";
import { sequelizee } from "../db/conexion.js";
//import { Task } from "./Task.js";


export const Agenda = sequelizee.define(
  "agendas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_servicio: {
      type: DataTypes.STRING,
    },
    ubicacion: {
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