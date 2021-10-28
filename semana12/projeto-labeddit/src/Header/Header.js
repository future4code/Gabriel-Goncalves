import React from "react";
import EstiloHeader from "./EstiloHeader.css"
import { exibeCadastro } from "../Rotas/Coordenador";
import { useHistory } from "react-router-dom";

const Header = () => {

    const history = useHistory()

    return (
        <div className="header">
            Header
        </div>
    )
}

export default Header