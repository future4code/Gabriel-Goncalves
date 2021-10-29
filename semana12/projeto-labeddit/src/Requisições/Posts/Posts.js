import {URL} from "../../Constantes/URL"
import axios from "axios"
import { exibeFeed } from "../../Rotas/Coordenador"

export const login = (body, history, limpa) => {
    const url = `${URL}/users/login`
    axios.post(url, body)
    .then((response) => {
        localStorage.setItem('token', response.data.token)
        limpa()
        exibeFeed(history)
    }).catch((error) => {
        alert(error)
    })
}

export const cadastrar = (body, history, limpa) => {
    const url = `${URL}/users/signup`
    console.log(URL)
    console.log(body)
    axios.post(url, body)
    .then((response) => {
        localStorage.setItem('token', response.data.token)
        alert("Usuário cadastrado")
        limpa()
        exibeFeed(history)
    }).catch((error) => {
        console.log(error.response)
    })
}

export const criaPost = (body, limpa) => {
    const url = `${URL}/posts`
    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.post(url, body, headers)
    .then((response) => {
        console.log(response)
        limpa()
    }).catch((error) => {
        console.log(error.response.data)
    })
}