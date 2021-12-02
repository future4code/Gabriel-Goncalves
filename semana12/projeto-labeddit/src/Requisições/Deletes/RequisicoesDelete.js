import axios from "axios";
import { URL } from "../../Constantes/URL";

export const deletaVotoComentario = (commentId) => {
    const url = `${URL}/comments/${commentId}/votes`
    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.delete(url, headers)
    .then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}

export const deletaVotoPost = (postId) => {
    const url = `${URL}/posts/${postId}/votes`
    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.delete(url, headers)
    .then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}