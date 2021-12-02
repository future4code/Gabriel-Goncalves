import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { accounts } from './accounts'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/users/all", (req: Request, res: Response) => {
    try {
        if(accounts.length === 0) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(accounts)
    } catch (error: any) {
        res.send(error.message)
    }
})

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const {name, CPF, dateOfBirthString} = req.body

        const [day, month, year] = dateOfBirthString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        const milissecondsAge: number = Date.now() - dateOfBirth.getTime()

        const yarsAge: number = milissecondsAge / 1000 / 60 / 60 / 24 / 365

        if (yarsAge < 18) {
            res.statusCode = 406
            throw new Error("A idade mínima para criar uma conta é 18 anos.")
        }

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        res.status(201).send("Conta criada!")
    } catch (error: any) {
        console.log(error)
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor ativo")
})