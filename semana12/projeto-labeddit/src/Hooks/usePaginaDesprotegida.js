import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { exibeFeed } from "../Rotas/Coordenador";

const usePaginaDesprotegida = () => {
    
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            exibeFeed(history)
        }
    }, [history])
}

export default usePaginaDesprotegida