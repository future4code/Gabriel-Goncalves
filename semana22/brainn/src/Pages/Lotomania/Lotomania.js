import React, { useContext, useEffect, useState } from "react";
import Select from "../../Components/Select/Select";
import GlobalStateContext from "../../Global/GlobalStateContext";
import axios from "axios";
import { URL } from "../../BASE_URL/BASE_URL";
import { setDateToDDMMYYY } from "../../Services/DateTreatment";
import "./Lotomania.css"

const Lotomania = () => {

    const { getLoteries, ids, getSortitions, sortition } = useContext(GlobalStateContext)
    const [lotomaniaDetails, setLotomaniaDetails] = useState()
    
    useEffect(() => {
        getLoteries()
        getSortitions()
    }, [])
    
    const lotomaniaIndex = ids && ids.findIndex((item) => {
        return item.nome === 'lotomania'
    })

    const sortitionIndex = sortition && sortition.findIndex((item) => {
        return item.loteriaId === lotomaniaIndex
    })

    const lotomaniaSortition = sortition && sortition[sortitionIndex] && sortition[sortitionIndex].concursoId

    useEffect(() => {
        lotomaniaSortition && getSortitionDetail(lotomaniaSortition)
    }, [lotomaniaSortition])

    const getSortitionDetail = (sortitionId) => {
        axios.get(`${URL}/concursos/${sortitionId}`)
            .then((response) => {
                setLotomaniaDetails(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const numeros = lotomaniaDetails && lotomaniaDetails.numeros

    const date = lotomaniaDetails && lotomaniaDetails.data
    const treatedDate = lotomaniaDetails && setDateToDDMMYYY(date)
    return (
        <div id='lotomaniaPage'>
            <div id='lotomaniaSideContent'>
                <Select />
                <p id='logo'>LOTOMANIA</p>
                <div>
                    <p id='concurso'>Concurso</p>
                    {
                        sortition &&
                        lotomaniaDetails &&
                        <span id="sortitionDate">{`${lotomaniaSortition} - ${treatedDate}`}</span>
                    }
                </div>
            </div>

            <div className="lotomaniaSortNumbersContainer">

                <div className='sortNumber' id="lotomaniaSortNumber1">{numeros && numeros[0]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber2">{numeros && numeros[1]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber3">{numeros && numeros[2]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber4">{numeros && numeros[3]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber5">{numeros && numeros[4]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber6">{numeros && numeros[5]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber7">{numeros && numeros[6]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber8">{numeros && numeros[7]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber9">{numeros && numeros[8]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber10">{numeros && numeros[9]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber11">{numeros && numeros[10]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber12">{numeros && numeros[11]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber13">{numeros && numeros[12]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber14">{numeros && numeros[13]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber15">{numeros && numeros[14]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber16">{numeros && numeros[15]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber17">{numeros && numeros[16]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber18">{numeros && numeros[17]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber19">{numeros && numeros[18]}</div>
                <div className='sortNumber' id="lotomaniaSortNumber20">{numeros && numeros[19]}</div>

                <p id='lotomaniaInfo'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>
        </div>
    )
}

export default Lotomania