import React from "react"
import {useEffect, useState} from "react"
import {useHistory, useParams} from "react-router-dom"
import axios from "axios"

const token = localStorage.getItem("token")

function TripDetailsPage () {

    const [detalhe, setDetalhe] = useState([])
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === null) {
            console.log("cadê o token?")
            history.push('/login')
        }
    }, [])

    useEffect(() => {
        pegaDetalhes()
    }, [])

    const params = useParams()

    const pegaDetalhes = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncalves-maryam/trip/${params.id}`
        const headers = {
            headers: {
                auth: token
            }
        }
        axios.get(url, headers)
        .then((response) => {
            setDetalhe(response.data.trip)
        }).catch((error) => {
            alert(error)
        })
    }

    const avaliaCandidato = (bool, idCandidato) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncalves-maryam/trips/${params.id}/candidates/${idCandidato}/decide`
        const headers = {
            headers: {
                auth: token
            }
        }
        console.log(headers)
        const body = {
            approve: bool
        }
        console.log(body)
        axios.put(url, headers, body)
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const aprova = (candidatoId) => {
        avaliaCandidato(true, candidatoId)
    }

    const reprova = (candidatoId) => {
        avaliaCandidato(false, candidatoId)
    }

    const detalheRenderizavel = detalhe.candidates && detalhe.candidates.map((candidato) => {
        return <div key={candidato.id}>
            <p>{candidato.name}</p>
            <p>{candidato.age}</p>
            <p>{candidato.country}</p>
            <p>{candidato.applicationText}</p>
            <button onClick={() => aprova(candidato.id)}>Aprovar</button>
            <button onClick={() => reprova(candidato.id)}>Reprovar</button>
        </div>
    })

    return (
        <div>
            TripDetailsPage
            {detalheRenderizavel}
        </div>
    )
}

export default TripDetailsPage