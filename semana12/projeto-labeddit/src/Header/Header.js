import React, {useState} from "react";
import { exibeLogin } from "../Rotas/Coordenador";
import EstiloHeader from "./EstiloHeader.css"
import { useHistory } from "react-router-dom";

const Header = () => {

    const history = useHistory()

    const token = localStorage.getItem('token')

    const desloga = () => {
        localStorage.removeItem('token')
        exibeLogin(history)
    }

    const [botaoLogout, setBotaoLogout] = useState(token ? <button onClick={() => desloga()}>Logout</button> : <p>Faça o login</p>)

    return (
        <div className="header">
            <h1>Header</h1>
            {botaoLogout}
        </div>
    )
}

export default Header