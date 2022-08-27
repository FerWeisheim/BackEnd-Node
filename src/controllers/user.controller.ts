import {Request,Response} from 'express'
import { join } from 'path';
import {User} from '../entitis/user'

export  const crearUser = async (req:Request,res:Response) => {
    const {nombre,email,username,password} = req.body;
    const user= new User();
    user.nombre=nombre;
    user.email=email;
    user.username=username;    
    user.password=password;
    await user.save();
    return res.json(user)
       
}


export const getUsers = async (req:Request,res:Response)=>{
    const users = await User.find();
    return res.json(users);
}

export const updateUser = async (req:Request,res:Response)=>{
   const {nombre,email,username,password}=req.body;
    const user= await User.findOneBy({id:parseInt(req.params.id)});
    if (!user) return res.json({mensage:"el usuario no existe"});
    user.nombre=nombre;
    user.email=email;
    user.username=username;
    user.password=password;
    user.save();
    return res.json({message:"usuario actualizado"});
}

export const deleteUser = async(req:Request,res:Response)=>{
    const {id} = req.params
    const user= await User.findOneBy({id:parseInt(id)});
    if(!user) return res.json({message:"el usuario no existe"});
    const respuesta = await User.delete({id:parseInt(id)});
    return res.json({message:"usuario eliminado"});
    
}