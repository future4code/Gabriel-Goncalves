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
        return item.nome === 'lotofacil'
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
                console.log(response.data)
                setLotofacilDetails(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const numeros = lotofacilDetails && lotofacilDetails.numeros

    const date = lotofacilDetails && lotofacilDetails.data
    const treatedDate = lotofacilDetails && setDateToDDMMYYY(date)
    console.log("AQUI", sortition)
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
                <div className='sortNumber' id="lotofacilSortNumber6">{numeros && numeros[4]}</div>

                <p id='info'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>
        </div>
    )
}

export default Lotofacil