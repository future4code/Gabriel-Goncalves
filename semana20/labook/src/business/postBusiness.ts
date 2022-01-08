import { Post } from "../model/posts"
import { PostDatabase } from "../data/postDatabase"

export class PostBusiness {

    getPostById = async (
        id: string
    ): Promise<Post | undefined> => {

        const post = await new PostDatabase().getPostById(id)

        return post
    }
}