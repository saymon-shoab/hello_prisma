import express from 'express'
import { PostController } from './post.controller';

const router = express.Router();

router.post("/create-post", PostController.createPostController)
router.get('/', PostController.getAllPostController )
router.get('/:id', PostController.getPostByIdController )
router.get('/:id', PostController.updatePostController )
router.get('/:id', PostController.deletePostController )
router.get('/learn-query', PostController.learnAgreateAndGroupingController )
export const postRoutes = router;