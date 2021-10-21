import React from "react"
import {useHistory} from "react-router-dom"

function HomePage () {

    const history = useHistory()

    const exibeViagens = () => {
        history.push("/trip/list")
    }

    const exibeAreaAdmin = () => {
        history.push("/login")
    }

    return (
        <div>
            HomePage
            <button onClick={exibeAreaAdmin}>Admin</button>
            <button onClick={exibeViagens}>Viagens</button>
        </div>
    )
}

export default HomePage