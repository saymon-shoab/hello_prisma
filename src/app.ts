import express, { Application } from 'express' 
import cors from 'cors'
import { userRoutes } from './modules/user/user.routes'
import { CategoryRoutes } from './modules/category/category.routes'
import { postRoutes } from './modules/post/post.routes'

const app:Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/category", CategoryRoutes)
app.use("/api/v1/post", postRoutes)

export default app