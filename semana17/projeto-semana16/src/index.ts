import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import createUser from './endpoints/createUsers'

dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: Number(process.env.DB_PORT || "3306")
    }
})

const app = express()
app.use(express.json())

app.put('/user', createUser)

app.listen(3003, () => {
    console.log("Servidor pronto!")
})