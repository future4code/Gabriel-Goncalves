import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";
import { DateTreatment } from "../services/dateTreatment";
import { IdGenerator } from "../services/idGenerator";
import { Post } from "../model/posts";
import { PostDatabase } from "../data/postDatabase";

export class PostController {

    getPostById = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { id } = req.params

            const post = await new PostBusiness().getPostById(id)

            res.send(post)
        } catch (error) {
            res.status(500).send("Falha interna")
        }
    }

    createPost = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { photo, description, type } = req.body
            const { userId } = req.params

            const PostId = new IdGenerator().generate()

            const postDate = new Date()
            const dateTime = new DateTreatment().setDateToYYYYMMDDHHMMSS(postDate)
            
            const newPost = new Post(PostId, photo, description, dateTime, type, userId)

            //console.log(newPost)

            const result = await new PostDatabase().createPost(newPost)

            res.status(200).send("Post criado")

        } catch (error) {
            res.status(500).send("Falha interna")
        }
    }
}