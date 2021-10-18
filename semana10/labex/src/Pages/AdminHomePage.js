import React from 'react'
import {useHistory} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"

function AdminHomePage () {

    const [viagens, setViagens] = useState([])
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === null) {
            console.log("cadê o token?")
            history.push('/login')
        }
    }, [])

    useEffect(() => {
        pegaViagens()
    }, [])

    const pegaViagens = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncalves-maryam/trips"
        axios.get(url)
        .then((response) => {
            setViagens(response.data.trips)
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    const exibeTelaAdmin = () => {
        history.push("/admin/trips/create")
    }

    const exibeDetalhes = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const viagensRenderizaveis = viagens.map((viagem) => {
        return <button 
                key={viagem.id}
                onClick={() => exibeDetalhes(viagem.id)}
                >
            <p>{viagem.name}</p>
            <p>{viagem.planet}</p>
            <p>{viagem.date}</p>
        </button>
    })

    return (
        <div>
            AdminHomePage
            {/* <button onClick={exibeDetalhes}>Detalhes Viagens</button> */}
            <button onClick={exibeTelaAdmin}>Criar</button>
            {viagensRenderizaveis}
        </div>
    )
}

export default AdminHomePage