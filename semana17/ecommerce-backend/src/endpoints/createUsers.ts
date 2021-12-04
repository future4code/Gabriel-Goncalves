import { Request, Response } from "express"

export default async function (
    req: Request,
    res: Response
) {
    try{
        const {name, email, password} = req.body
    } catch {

    }
}