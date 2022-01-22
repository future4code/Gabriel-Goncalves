import React, { useContext, useEffect, useState } from "react";
import Select from "../../Components/Select/Select";
import GlobalStateContext from "../../Global/GlobalStateContext";
import axios from "axios";
import { URL } from "../../BASE_URL/BASE_URL";
import { setDateToDDMMYYY } from "../../Services/DateTreatment";
import "./DiaDeSorte.css"

const DiaDeSorte = () => {
    
    const { getLoteries, ids, getSortitions, sortition } = useContext(GlobalStateContext)
    const [diaDeSorteDetails, setDiaDeSorteDetails] = useState()
    
    useEffect(() => {
        getLoteries()
        getSortitions()
    }, [])
    
    const diaDeSorteIndex = ids && ids.findIndex((item) => {
        return item.nome === 'dia de sorte'
    })

    const sortitionIndex = sortition && sortition.findIndex((item) => {
        return item.loteriaId === diaDeSorteIndex
    })

    const diaDeSorteSortition = sortition && sortition[sortitionIndex] && sortition[sortitionIndex].concursoId

    useEffect(() => {
        diaDeSorteSortition && getSortitionDetail(diaDeSorteSortition)
    }, [diaDeSorteSortition])

    const getSortitionDetail = (sortitionId) => {
        axios.get(`${URL}/concursos/${sortitionId}`)
            .then((response) => {
                setDiaDeSorteDetails(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const numeros = diaDeSorteDetails && diaDeSorteDetails.numeros

    const date = diaDeSorteDetails && diaDeSorteDetails.data
    const treatedDate = diaDeSorteDetails && setDateToDDMMYYY(date)
    return (
        <div id='diaDeSortePage'>
            <div id='diaDeSorteSideContent'>
                <Select />
                <p id='logo'>DIA DE SORTE</p>
                <div>
                    <p id='concurso'>Concurso</p>
                    {
                        sortition &&
                        diaDeSorteDetails &&
                        <span id="sortitionDate">{`${diaDeSorteSortition} - ${treatedDate}`}</span>
                    }
                </div>
            </div>

            <div className="diaDeSorteSortNumbersContainer">

                <div className='sortNumber' id="diaDeSorteSortNumber1">{numeros && numeros[0]}</div>
                <div className='sortNumber' id="diaDeSorteSortNumber2">{numeros && numeros[1]}</div>
                <div className='sortNumber' id="diaDeSorteSortNumber3">{numeros && numeros[2]}</div>
                <div className='sortNumber' id="diaDeSorteSortNumber4">{numeros && numeros[3]}</div>
                <div className='sortNumber' id="diaDeSorteSortNumber5">{numeros && numeros[4]}</div>
                <div className='sortNumber' id="diaDeSorteSortNumber6">{numeros && numeros[5]}</div>
                <div className='sortNumber' id="diaDeSorteSortNumber7">{numeros && numeros[6]}</div>

                <p id='diaDeSorteInfo'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>
        </div>
    )
}

export default DiaDeSorte