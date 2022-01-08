import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";
import { DateTreatment } from "../services/dateTreatment";
import { IdGenerator } from "../services/idGenerator";

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

            const id = new IdGenerator().generate()

            const postDate = new Date()
            const dateTime = new DateTreatment().setDateToYYYYMMDDHHMMSS(postDate)

        } catch (error) {
            res.status(500)
        }
    }
}