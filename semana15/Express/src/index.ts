import express from 'express'
import cors from 'cors'
import { countries } from "./data"
import { country } from './types'

const app = express()

app.use(express.json())
app.use(cors())

// app.get("/test", (req, res) => { res.send("Olá do Express") })

app.get("/countries", (req, res) => { res.send(countries) })

app.get("/countries/:id", (req, res) => {
    const id = req.params.id

    const result: country | undefined = countries.find((country) => {
        return country.id === Number(id)
    })

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("País não encontrado")
    }
})

app.get("/search", (req, res) => {
    const key = req.query

    let result: country[] = countries

    if (key.name) {
        result = result.filter(
            country => res.status(200).send(country.name.includes(key.name as string))
        )
    }

    if(key.capital) {
        result = result.filter(
            country => country.capital.includes(key.capital as string)
        )
    }

    if(key.continent) {
        result = result.filter(
            country => country.continent.includes(key.continent as string)
        )
    }
})

app.listen(3003, () => {
    console.log("Servidor pronto!")
})