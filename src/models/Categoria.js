import { DataTypes } from "sequelize";
import { sequelizee } from "../db/conexion.js";
import { Agenda } from "./Agenda.js";


const Categoria = sequelizee.define(
  "categorias",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

//union de llave foranea de agenda con tabla categoria
Categoria.hasMany(Agenda, {
  foreigKey: 'CategoriaId',
  sourceKey: 'id'
})

//creacion de llave foranea de la tabla agenda para conectar con categoria
Agenda.belongsTo(Categoria,{
  foreigKey: 'CategoriaId',
  targetId: 'id'
})

export default Categoria