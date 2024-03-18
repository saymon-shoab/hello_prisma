import { Request, Response } from 'express';
import { PostService } from './post.service';


const createPostController = async (req: Request, res: Response) => {
   try {
      const result = await PostService.createPost(req.body)
      res.send({
        success: true,
        message: "post created!",
        data: result
      })
   } catch (error) {
    res.send(error)
    console.log(error)
   }
}

const getAllPostController = async (req:Request,res:Response) => {
    console.log(req.query)
    const option = req.query
    try {
        const result = await PostService.getAllPostService( option)
        res.send({
            success: true,
            message: 'success fetch',
            total: result.total,
            data: result.data,
        })
    } catch (error) {
        res.send({
            success: false,
            error,
        })
    }
}

const updatePostController = async (req:Request,res:Response) => {
    const id = parseInt(req.params.id)
    const payload = req.body
    try {
        const result = await PostService.updatePostService(id, payload)
        res.send({
            success: true,
            message: 'data Update success',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            error,
        })
    }
}


const deletePostController = async (req:Request,res:Response) => {
    const id = parseInt(req.params.id)
    try {
        const result = await PostService.deletePostService(id)
        res.send({
            success: true,
            message: 'data deleted success',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            error,
        })
    }
}

const learnAgreateAndGroupingController = async (req:Request,res:Response) => {
    try {
        const result = await PostService.learnAgreateAndGrouping()
        res.send({
            success: true,
            message: 'result',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            error,
        })
    }
}


const getPostByIdController = async (req:Request,res:Response) => {
    try {
        const result = await PostService.getPostByIdService(req.body)
        res.send({
            success: true,
            message: 'success fetch',
            data: result
        })
    } catch (err) {
        res.send({
            success: false,
            err
        })
    }
}

export const PostController = {
    createPostController,
    getAllPostController,
    getPostByIdController,
    updatePostController,
    deletePostController,
    learnAgreateAndGroupingController
}