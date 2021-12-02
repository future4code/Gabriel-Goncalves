import axios from "axios";
import { useEffect, useState } from "react";

const useRequisicao = (estadoInicial, url) => {
    const [info, setInfo] = useState(estadoInicial)

    useEffect(() => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        axios.get(url, headers)
        .then((response) => {
            setInfo(response.data)
        }).catch((error) => {
            alert(error)
        })
    }, [url])
    return (info)
}

export default useRequisicao