import React from 'react'
import {useHistory} from "react-router-dom"

function AdminHomePage () {

    const history = useHistory()

    const exibeTelaAdmin = () => {
        history.push("/admin/trips/create")
    }

    const exibeDetalhes = () => {
        history.push("/admin/trips/:id")
    }

    return (
        <div>
            AdminHomePage
            <button onClick={exibeDetalhes}>Detalhes Viagens</button>
            <button onClick={exibeTelaAdmin}>Criar</button>
        </div>
    )
}

export default AdminHomePage