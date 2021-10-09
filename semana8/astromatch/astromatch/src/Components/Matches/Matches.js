import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Matches.css'

function Matches(props) {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        retornaMatches()
    }, [])

    const retornaMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches"
        axios.get(url)
        .then((response) => {
            setMatches(response.data.matches)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const perfisQueDeramMatch = matches.map((perfil) => {
        return <div key={perfil.id}  className='card'>
            <p>{perfil.name}</p>
            <img src={perfil.photo} alt="Foto do perfil"/>
        </div>
    })

    return (
        <div>
            <button onClick={props.voltaTela}>Voltar</button>
            <div>
                {perfisQueDeramMatch}
            </div>
        </div>
    )
}

export default Matches