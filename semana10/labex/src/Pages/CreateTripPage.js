import axios from "axios"
import React from "react"
import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"

function CreateTripPage () {

    const [nome, setNome] = useState("")
    const [planeta, setPlaneta] = useState("")
    const [data, setData] = useState("")
    const [descricao, setDescricao] = useState("")
    const [duracao, setDuracao] = useState("")
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === null) {
            console.log("cadê o token?")
            history.push('/login')
        }
    }, [])

    const setaNome = (event) => {
        setNome(event.target.value)
    }

    const setaPlaneta = (event) => {
        setPlaneta(event.target.value)
    }

    const setaData = (event) => {
        setData(event.target.value)
    }

    const setaDescricao = (event) => {
        setDescricao(event.target.value)
    }

    const setaDuracao = (event) => {
        setDuracao(event.target.value)
    }

    const criaViagem = () => {
        const token = localStorage.getItem("token")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncalves-maryam/trips"
        const headers = {
            headers: {
                auth: token
            }
        }
        const body = {
            name: nome,
            planet: planeta,
            date: data,
            description: descricao,
            durationInDays: Number(duracao)
        }
        axios.post(url, body, headers)
        .then((response) => {
            alert("Viagem criada!")
        }).catch((error) => {
            console.log(error.response.data.message)
        })
    }

    return (
        <div>
            <input
            value={nome}
            onChange={setaNome}
            />
            <input
            value={planeta}
            onChange={setaPlaneta}
            />
            <input
            type='date'
            value={data}
            onChange={setaData}
            />
            <input
            value={descricao}
            onChange={setaDescricao}
            />
            <input
            type="number"
            value={duracao}
            onChange={setaDuracao}
            />
            <button onClick={criaViagem}>Criar</button>
        </div>
    )
}

export default CreateTripPage