import React, { useContext, useEffect, useState } from "react";
import Select from "../../Components/Select/Select";
import GlobalStateContext from "../../Global/GlobalStateContext";
import axios from "axios";
import { URL } from "../../BASE_URL/BASE_URL";
import { setDateToDDMMYYY } from "../../Services/DateTreatment";
import "./Lotofacil.css"

const Lotofacil = () => {

    const { getLoteries, ids, getSortitions, sortition } = useContext(GlobalStateContext)
    const [lotofacilDetails, setLotofacilDetails] = useState()
    
    useEffect(() => {
        getLoteries()
        getSortitions()
    }, [])
    
    const lotofacilIndex = ids && ids.findIndex((item) => {
        return item.nome === 'lotofácil'
    })

    const sortitionIndex = sortition && sortition.findIndex((item) => {
        return item.loteriaId === lotofacilIndex
    })

    const lotofacilSortition = sortition && sortition[sortitionIndex] && sortition[sortitionIndex].concursoId

    useEffect(() => {
        lotofacilSortition && getSortitionDetail(lotofacilSortition)
    }, [lotofacilSortition])

    const getSortitionDetail = (sortitionId) => {
        axios.get(`${URL}/concursos/${sortitionId}`)
            .then((response) => {
                setLotofacilDetails(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const numeros = lotofacilDetails && lotofacilDetails.numeros

    const date = lotofacilDetails && lotofacilDetails.data
    const treatedDate = lotofacilDetails && setDateToDDMMYYY(date)
    return (
        <div id='lotofacilPage'>
            <div id='lotofacilSideContent'>
                <Select />
                <p id='logo'>LOTOFACIL</p>
                <div>
                    <p id='concurso'>Concurso</p>
                    {
                        sortition &&
                        lotofacilDetails &&
                        <span id="sortitionDate">{`${lotofacilSortition} - ${treatedDate}`}</span>
                    }
                </div>
            </div>

            <div className="lotofacilSortNumbersContainer">

                <div className='sortNumber' id="lotofacilSortNumber1">{numeros && numeros[0]}</div>
                <div className='sortNumber' id="lotofacilSortNumber2">{numeros && numeros[1]}</div>
                <div className='sortNumber' id="lotofacilSortNumber3">{numeros && numeros[2]}</div>
                <div className='sortNumber' id="lotofacilSortNumber4">{numeros && numeros[3]}</div>
                <div className='sortNumber' id="lotofacilSortNumber5">{numeros && numeros[4]}</div>
                <div className='sortNumber' id="lotofacilSortNumber6">{numeros && numeros[5]}</div>
                <div className='sortNumber' id="lotofacilSortNumber7">{numeros && numeros[6]}</div>
                <div className='sortNumber' id="lotofacilSortNumber8">{numeros && numeros[7]}</div>
                <div className='sortNumber' id="lotofacilSortNumber9">{numeros && numeros[8]}</div>
                <div className='sortNumber' id="lotofacilSortNumber10">{numeros && numeros[9]}</div>
                <div className='sortNumber' id="lotofacilSortNumber11">{numeros && numeros[10]}</div>
                <div className='sortNumber' id="lotofacilSortNumber12">{numeros && numeros[11]}</div>
                <div className='sortNumber' id="lotofacilSortNumber13">{numeros && numeros[12]}</div>
                <div className='sortNumber' id="lotofacilSortNumber14">{numeros && numeros[13]}</div>
                <div className='sortNumber' id="lotofacilSortNumber15">{numeros && numeros[14]}</div>

                <p id='lotofacilInfo'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>
        </div>
    )
}

export default Lotofacil