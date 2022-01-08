import { BaseDatabase } from "./baseDatabase";
import { Post } from "../model/posts";

export class PostDatabase extends BaseDatabase {

    getPostById = async (
        id: string
    ): Promise<Post | undefined> => {

        const result = await this.connection("labook_posts").where(id)

        return result[0]
    }

    createPost = async (
        post: object
    ): Promise<void> => {

        const result = await this.connection("labook_posts").insert(post)
    }
}