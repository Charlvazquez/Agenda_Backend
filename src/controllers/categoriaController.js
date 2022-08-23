import { Agenda } from "../models/Agenda.js"
import  Categoria  from "../models/Categoria.js"

export const getCategorias = async(req,res)=>{
    try {
        const categorias = await Categoria.findAll()
        res.json(categorias)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const crearCategoria =  async (req, res) => {
    const {nombre,descripcion} = req.body
    try {
        await Categoria.create({nombre,descripcion})
        res.json({
            "message":"¡Registro creado correctamente!"
        })
     } catch (error) {
         res.json( {message: error.message} )
     }
 }

 export const borrarCategoria = async (req, res) => {
    try {
        await Categoria.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
} 

export const getCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findOne({
            where:{ id:req.params.id }
        })
        if(!categoria)
        return res.status(404).json({message:"Categoria no encontrada!"})
        res.json(categoria)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const categoriaSelectiva = async (req, res) => {
    try {
        const titulo = await Categoria.findAll({
            where: {
              nombre: 'Salud'
            }
          });
        res.json(titulo)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const actualizarCategoria = async (req, res) => {
    const {nombre,descripcion} = req.body
    try {
        await Categoria.update({nombre,descripcion}, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//busqueda por arreglo
export const getCategoriaServicio = async(req,res)=>{
    const {id} = req.params
    const servicios =  await Agenda.findAll({
        where:{CategoriaId: id}
    })
    res.json(servicios)
}
