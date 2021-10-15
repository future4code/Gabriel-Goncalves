import React from "react"
import {useHistory} from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios'

function ListTripsPage () {

    // const [viagens, setViagens] = useState([])
    const history = useHistory()

    useEffect(() => {
        this.props.mostraViagens
    },[])

    /* const pegaViagens = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncalves-maryam/trips"
        axios.get(url)
        .then((response) => {
            setViagens(response.data.trips)
        }).catch((error) => {
            alert(error.response.data.message)
        })
    } */

    const exibeInscricao = () => {
        history.push("/trips/application")
    }

    const viagensRenderizaveis = this.props.viagens.map((viagem) => {
        return <button 
                key={viagem.id}
                onClick={() => exibeInscricao()}>
            <p>{viagem.name}</p>
            <p>{viagem.planet}</p>
            <p>{viagem.date}</p>
        </button>
    })

    return (
        <div>
            {/* <button onClick={exibeInscricao}>Inscrição</button> */}
            {viagensRenderizaveis}
        </div>
    )
}

export default ListTripsPage