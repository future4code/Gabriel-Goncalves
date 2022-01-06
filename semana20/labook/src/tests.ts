import { HashManager } from "./services/hashManager";
import { IdGenerator } from "./services/idGenerator";

const id = new IdGenerator().generate()

const hashPass = new HashManager().createHash("nominu")
const hashPass2 = new HashManager().createHash("split")
console.log(hashPass)
console.log(hashPass2)
console.log(id)