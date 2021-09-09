import React from "react";
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className='borda-card-pequeno'>
            <div className='container'>
                <img src={props.imagem}/>
                <p><b>{props.titulo}</b>{props.texto}</p>
            </div>
        </div>
    )
}

export default CardPequeno;