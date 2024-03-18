import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response)=>{
    try {
        const result = await UserService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: 'User Created Successfully',
            data: result
        })
    } catch (error) {
        
    }
}

const insertOrUpdateProfile = async (req: Request, res: Response) => {
    try {
        const result = await UserService.insertOrUpdateProfile(req.body);
        res.send({
            success: true,
            message: "Profile created/updated successfylly",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

const getUsers = async (req:Request, res:Response) =>{
    try {
        const results = await UserService.getUsers();
        res.send({
            success: true,
            message: "Data fetch successfully",
            data: results
        })
    } catch (error) {
        res.send({error})
    }
}
const getSingleUsers = async (req:Request,res:Response) => {
    try {
        const id = req.params.id
        const result = await UserService.getSingleUser(parseInt(id))
        res.send({
            success: true,
            message: "data fetch successfylly",
            data : result
        })
    } catch (error) {
        res.send(error)
    }
}
export const UserController = {
    insertIntoDB,
    insertOrUpdateProfile,
    getUsers,
    getSingleUsers
}