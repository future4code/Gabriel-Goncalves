import React from "react"
import {useHistory} from "react-router-dom"

function LoginPage () {

    const history = useHistory()

    const exibeListaAdmin = () => {
        history.push("/admin/trips/list")
    }

    return (
        <div>
            LoginPage
            <button onClick={exibeListaAdmin}>Home Admin</button>
        </div>
    )
}

export default LoginPage