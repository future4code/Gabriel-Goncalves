import React from "react"
import {useHistory} from "react-router-dom"
import {useState} from 'react'
import axios from "axios"

function LoginPage () {

    const [mail, setMail] = useState("")
    const [senha, setSenha] = useState("")

    const history = useHistory()

    const exibeListaAdmin = () => {
        history.push("/admin/trips/list")
    }

    const setaMail = (event) => {
        setMail(event.target.value)
    }

    const setaSenha = (event) => {
        setSenha(event.target.value)
    }

    const login = (event) => {

        event.preventDefault()

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncalves-maryam/login"

        const body = {
            email: mail,
            password: senha
        }

        axios.post(url, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            exibeListaAdmin()
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    return (
        <div>
            <form onSubmit={login}>
                <input 
                type='text'
                value={mail}
                onChange={setaMail}
                />
                <input 
                type='password'
                value={senha}
                onChange={setaSenha}
                />
                <button>Home Admin</button>
            </form>
        </div>
    )
}

export default LoginPage