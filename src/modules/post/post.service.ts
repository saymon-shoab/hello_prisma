import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const createPost = async (data: Post): Promise<Post> =>{
    const result = await prisma.post.create({
        data,
        include:{
            author:true,
            category:true
        },
        
    })
    return result
}

const getAllPostService = async (option: any) => {
    const {sortBy, sortOrder, searchTerm, page, limit} = option;
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0
    const take = parseInt(limit) || 10
    return await prisma.$transaction(async (tr)=>{
        const result = await tr.post.findMany({
            skip,
            take,
            include:{
                author:true,
                category:true
            },
            orderBy: sortBy && sortOrder ? {
                [sortBy]: sortOrder
            }: {
                createdAt: 'desc'
            },
            where:{
                OR:[
                    {
                        title:{
                            contains: searchTerm,
                            mode:'insensitive'
                        }
                    },
                    {  
                        author:{
                            name:{
                                contains:searchTerm,
                                mode:'insensitive'
                            }
                        }
                    }
                ]
               
            }
        })
        const total = await tr.post.count()
        return {data:result, total};
    })
    
}


const updatePostService = async (id:number, payload: Partial<Post>): Promise<Post> => {
    const result = await prisma.post.update({
        where: {
            id
        },
        data: payload
    })
    return result
}

const deletePostService = async (id:number): Promise<Post> => {
    const result = await prisma.post.delete({
        where: {
            id
        }
    })
    return result
}

const getPostByIdService = async (id:number) => {
    const result = await prisma.post.findUnique({
        where:{
            id:id
        }
    })
    return result;
}

const learnAgreateAndGrouping = async() => {
    const result = await prisma.post.aggregate({
        _avg: {
            authorId: true
        }
    })
    return result
}

export const PostService = {
    createPost,
    getAllPostService,
    getPostByIdService,
    updatePostService,
    deletePostService,
    learnAgreateAndGrouping
}