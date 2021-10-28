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
    axios.post(url, body)
    .then((response) => {
        localStorage.setItem('token', response.data.token)
        limpa()
        exibeFeed(history)
    })
}