import React, { useContext, useEffect, useState } from "react";
import Select from "../../Components/Select/Select";
import GlobalStateContext from "../../Global/GlobalStateContext";
import axios from "axios";
import { URL } from "../../BASE_URL/BASE_URL";
import { setDateToDDMMYYY } from "../../Services/DateTreatment";
import "./Mega-Sena.css"

const MegaSena = () => {

    const { getLoteries, ids, getSortitions, sortition } = useContext(GlobalStateContext)
    const [megaSenaDetails, setMegaSenaDetails] = useState()

    useEffect(() => {
        getLoteries()
        getSortitions()
    }, [])

    const megaSenaIndex = ids && ids.findIndex((item) => {
        return item.nome === 'mega-sena'
    })

    const sortitionIndex = sortition && sortition.findIndex((item) => {
        return item.loteriaId === megaSenaIndex
    })

    const megaSenaSortition = sortition && sortition[sortitionIndex] && sortition[sortitionIndex].concursoId

    useEffect(() => {
        megaSenaSortition && getSortitionDetail(megaSenaSortition)
    }, [megaSenaSortition])

    const getSortitionDetail = (sortitionId) => {
        axios.get(`${URL}/concursos/${sortitionId}`)
            .then((response) => {
                setMegaSenaDetails(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const numeros = megaSenaDetails && megaSenaDetails.numeros

    const date = megaSenaDetails && megaSenaDetails.data
    const treatedDate = megaSenaDetails && setDateToDDMMYYY(date)

    return (
        <div id='megaSenaPage'>
            <div id='sideContent'>
                <Select />
                <p id='logo'>MEGA-SENA</p>
                <div>
                    <p id='concurso'>Concurso</p>
                    {
                        sortition &&
                        megaSenaDetails &&
                        <span id="sortitionDate">{`${megaSenaSortition} - ${treatedDate}`}</span>
                    }
                </div>
            </div>

            <div className="sortNumbersContainer">

                <div className='sortNumber' id="sortNumber1">{numeros && numeros[0]}</div>
                <div className='sortNumber' id="sortNumber2">{numeros && numeros[1]}</div>
                <div className='sortNumber' id="sortNumber3">{numeros && numeros[2]}</div>
                <div className='sortNumber' id="sortNumber4">{numeros && numeros[3]}</div>
                <div className='sortNumber' id="sortNumber5">{numeros && numeros[4]}</div>
                <div className='sortNumber' id="sortNumber6">{numeros && numeros[5]}</div>

                <p id='info'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>
        </div>
    )
}

export default MegaSena