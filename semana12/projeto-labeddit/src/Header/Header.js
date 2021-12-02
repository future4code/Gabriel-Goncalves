import React, {useState} from "react";
import { exibeLogin } from "../Rotas/Coordenador";
import "./EstiloHeader.css"
import { useHistory } from "react-router-dom";

const Header = () => {

    const history = useHistory()

    const token = localStorage.getItem('token')

    const desloga = () => {
        localStorage.removeItem('token')
        exibeLogin(history)
    }

    const [botaoLogout, setBotaoLogout] = useState(token ? <button id="botao-log" onClick={() => desloga()}>Logout</button> : <p>Faça o login</p>)

    return (
        <div className="header">
            <h1>Labeddit</h1>
            {botaoLogout}
        </div>
    )
}

export default Header