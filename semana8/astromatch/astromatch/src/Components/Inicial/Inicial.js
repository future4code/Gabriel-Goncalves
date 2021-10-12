import React, {useEffect, useState} from "react";
import axios from 'axios'
import './Inicial.css'

function Inicial (props) {

    const [perfil, setPerfil] = useState({})

    const pegaPerfilSemVisualizacao = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person`
        axios.get(url)
        .then((response) => {
          setPerfil(response.data.profile)
        })
        .catch((error) => {
          alert(error)
        })
      }

    useEffect(() => {
        pegaPerfilSemVisualizacao()
    }, [])

    const descurtido = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person'
        const body = {
            "id": perfil.id,
            "choice": false
        }

        axios.post(url, body)
        .then((response) => {
            pegaPerfilSemVisualizacao()
        })
        .catch((error) => {
            alert(error)
        })
    }

    const curtido = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person'
        const body = {
            "id": perfil.id,
            "choice": true
        }

        axios.post(url, body)
        .then((response) => {
            pegaPerfilSemVisualizacao()
        })
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <div>
            <button onClick={props.voltaTela}>Veja os Matches</button>
            <div className='card'>
                <img src={perfil.photo && perfil.photo} alt="Foto do Perfil"/>
                <p>{perfil.name && perfil.name}</p>
                <p>{perfil.bio && perfil.bio}</p>
                <button onClick={() => descurtido(perfil)}>Desgostinha</button>
                <button onClick={() => curtido(perfil)}>Gostinha</button>
            </div>
        </div>
    )
}

export default Inicial