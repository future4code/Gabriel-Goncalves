import { sign } from "jsonwebtoken";
import { authenticationData } from "../model/user";

export class Authenticator {
    generateToken = (
        payload: authenticationData
    ) => {
        return sign(
            payload,
            process.env.JWT_KEY,
            {
                expiresIn: "12"
            }
        )
    }

    getTokenData = () => {}
}