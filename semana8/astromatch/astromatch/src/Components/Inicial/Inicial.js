import React, {useEffect, useState} from "react";
import axios from 'axios'
import './Inicial.css'

function Inicial (props) {

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        pegaPerfilSemVisualizacao()
    }, [])

    /* const curtir = (perfil) => {
        console.log(perfil.id)
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person'
        const headers = {
            headers: {
                ContentType: 'application/json'
            }
        }
        const body = {
            "id": perfil.id,
            "choice": curtido
        }
        axios.post(url, body)
        .then((response) => {
            console.log(response)
            setCurtido()
        })
        .catch((error) => {
            console.log(error)
        })
    } */

    const descurtido = (perfil) => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person'
        const body = {
            "id": perfil.id,
            "choice": false
        }

        axios.post(url, body)
        .then((response) => {
            console.log(response)
            pegaPerfilSemVisualizacao()
        })
        .catch((error) => {
            alert(error)
        })
    }

    const curtido = (perfil) => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person'
        const body = {
            "id": perfil.id,
            "choice": true
        }

        axios.post(url, body)
        .then((response) => {
            console.log(response)
            pegaPerfilSemVisualizacao()
        })
        .catch((error) => {
            alert(error)
        })
    }

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

    return (
        <div>
            <button onClick={props.voltaTela}>Veja os Matches</button>
            <div className='card'>
                <img src={perfil.photo && perfil.photo} alt="Foto do Perfil"/>
                <p>{perfil.name && perfil.name}</p>
                <p>{perfil.bio && perfil.bio}</p>
                <button onClick={() => descurtido()}>Desgostinha</button>
                <button onClick={() => curtido()}>Gostinha</button>
                {/* {chamaCurtir(perfil)} */}
            </div>
        </div>
    )
}

export default Inicial