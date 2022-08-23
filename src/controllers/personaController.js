import { Op } from "sequelize";
import { Personas } from "../models/Personas.js";

export const getPersonas = async(req,res)=>{
    try {
        const personas = await Personas.findAll()
        res.json(personas)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

export const crearPersona =  async (req, res) => {
    try {
        await Personas.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
     } catch (error) {
        return res.status(404).json({message: error.message})
     }
 }

 export const PersonasdeReynosa = async (req, res) => {
    try {
        const reynosa = await Personas.findAll({
            where: {
                ciudad: 'Reynosa'
            }
          });
        res.json(reynosa)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
} 

 export const getPersona = async (req, res) => {
   try {
       const {id} = req.params
       const persona = await Personas.findOne({
           where:{
               id
           }
       })
       if(!persona)
       return res.status(404).json({message:"Persona no encontrada!"})
       
       res.json(persona)
   } catch (error) {
       return res.status(500).json({message:error.message})     
   }
 }   

export const borrarPersona = async (req, res) => {
    try {
        await Personas.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

//controlador para buscar edades mayor o igual a 24
export const PersonalEdad = async (req, res) => {
    try {
        const edad = await Personas.findAll({
            where: {
                edad: {
                    [Op.gte] : 24
                }
            }
          });
        res.json(edad)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
