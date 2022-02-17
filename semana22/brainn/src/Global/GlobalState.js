import React, { useState } from "react";
import { goToDiaDeSorte, goToLotoFacil, goToLotomania, goToMegaSena, goToQuina, goToTimemania } from "../Routes/Coordinator";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { URL } from "../BASE_URL/BASE_URL";

const GlobalState = (props) => {

    const [loto, setLoto] = useState("")
    const [sortition, setSortition] = useState([])
    const [ids, setIds] = useState()

    const getSortitions = () => {
        axios.get(`${URL}/loterias-concursos`)
            .then((res) => {
                setSortition(res.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const getLoteries = () => {
        axios.get(`${URL}/loterias`)
            .then((response) => {
                setIds(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const changeLoto = (history) => {
        switch (loto) {
            case "megasena":
                goToMegaSena(history)
                break;
            case "diadesorte":
                goToDiaDeSorte(history)
                break
            case "lotofacil":
                goToLotoFacil(history)
                break
            case "lotomania":
                goToLotomania(history)
                break
            case "quina":
                goToQuina(history)
                break
            case "timemania":
                goToTimemania(history)
                break
            default:
                goToMegaSena(history)
        }
    }

    const data = { getLoteries, loto, setLoto, changeLoto, sortition, getSortitions, ids }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState