import { Authenticator } from "./services/Authenticator";
import { DateTreatment } from "./services/dateTreatment";
import { HashManager } from "./services/hashManager";
import { IdGenerator } from "./services/idGenerator";
import {Post} from "./model/posts"
import { POST_TYPES } from "./model/posts";
import { PostBusiness } from "./business/postBusiness";
import { User } from "./model/user";

// const id = new IdGenerator().generate()

// const hashPass = new HashManager().createHash("nothingtodohere")

// const token = new Authenticator().generateToken({id: "something"})
// console.log({ id, hashPass, token })

// const date = new Date()
// const test = new DateTreatment().setDateToYYYYMMDDHHMMSS(date)
// console.log({test})