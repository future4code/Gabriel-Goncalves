import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { exibeLogin } from "../Rotas/Coordenador";

const usePaginaProtegida = () => {
    
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            exibeLogin(history)
        }
    }, [history])
}

export default usePaginaProtegida