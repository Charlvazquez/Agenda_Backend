import { Agenda } from "../models/Agenda.js";
import Categoria from "../models/Categoria.js";
import { Personas } from "../models/Personas.js";

export const getAgenda = async(req,res)=>{
    try {
        const agenda = await Agenda.findAll()
        res.json(agenda)
    } catch (error) {
        return res.status(500).json({message: "Error en busqueda!"})
    }
}

export const AgregarContacto = async(req,res)=>{
    try {
        await Agenda.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        return res.status(500).json({message: "No se puede agregar registro!"})
    }
}

export const getServicio = async(req,res)=>{
    try {
        const {id} = req.params
        const servicio = await Agenda.findOne({
            where:{
                id
            }
        })
        if(!servicio)
        return res.status(404).json({message:"Servicio no encontrado!"})
        
        res.json(servicio)
    } catch (error) {
        return res.status(500).json({message: "Error en servidor!"})
    }
}

export const getLista = async(req,res)=>{
    const {id} = req.params
    const servicios = await Agenda.findOne({
        //include es el formato similar a lookup de aggregation en mongo para las relaciones
        include:[{
            model:Categoria,
            attributes:["nombre"] //seleccion de datos para atraer de la tabla
        },
    {
        model:Personas,
        attributes:["nombre","apellidos","telefono","ocupacion"]
    }],
        where:{
            id
        }
    })
    res.json(servicios)
}

export const borrarServicio = async(req,res)=>{
    try {
        const {id} = req.params
        const servicio = await Agenda.destroy({
            where:{
                id
            }
        })
        if(!servicio)
        return res.status(404).json({message:"Servicio no encontrado!"})
        
        res.json({message:"Servicio borrado exitosamente!"})
    } catch (error) {
        return res.status(500).json({message: "Error en servidor!"})
    }
}

export const actualizarServicio = async(req,res)=>{
    try {
        const {id} = req.params
        const servicio = await Agenda.findOne({
            where:{id}
        })
        if(!servicio)
        return res.status(404).json({message:"Servicio no encontrado!"})
        
        servicio.set(req.body)
        await servicio.save()
        return res.json({message:"Servicio Actualizado!"})
    } catch (error) {
        return res.status(500).json({message: "Error en servidor!"}) 
    }
}

export const getListas = async(req,res)=>{
    const servicios = await Agenda.findAll({
        //include es el formato similar a lookup de aggregation en mongo para las relaciones
        include:[{
            model:Categoria,
            attributes:["nombre"] //seleccion de datos para atraer de la tabla
        },
    {
        model:Personas,
        attributes:["nombre","apellidos","telefono","ocupacion"]
    }]
    })
    res.json(servicios)
}

