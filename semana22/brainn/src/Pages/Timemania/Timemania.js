import React, { useContext, useEffect, useState } from "react";
import Select from "../../Components/Select/Select";
import GlobalStateContext from "../../Global/GlobalStateContext";
import axios from "axios";
import { URL } from "../../BASE_URL/BASE_URL";
import { setDateToDDMMYYY } from "../../Services/DateTreatment";
import "./Timemania.css"

const Timemania = () => {

    const { getLoteries, ids, getSortitions, sortition } = useContext(GlobalStateContext)
    const [timemaniaDetails, setTimemaniaDetails] = useState()
    useEffect(() => {
        getLoteries()
        getSortitions()
    }, [])
    
    const timemaniaIndex = ids && ids.findIndex((item) => {
        return item.nome === 'timemania'
    })

    const sortitionIndex = sortition && sortition.findIndex((item) => {
        return item.loteriaId === timemaniaIndex
    })

    const timemaniaSortition = sortition && sortition[sortitionIndex] && sortition[sortitionIndex].concursoId

    useEffect(() => {
        timemaniaSortition && getSortitionDetail(timemaniaSortition)
    }, [timemaniaSortition])

    const getSortitionDetail = (sortitionId) => {
        axios.get(`${URL}/concursos/${sortitionId}`)
            .then((response) => {
                setTimemaniaDetails(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const numeros = timemaniaDetails && timemaniaDetails.numeros

    const date = timemaniaDetails && timemaniaDetails.data
    const treatedDate = timemaniaDetails && setDateToDDMMYYY(date)
    return (
        <div id='timemaniaPage'>
            <div id='timemaniaSideContent'>
                <Select />
                <p id='logo'>TIMEMANIA</p>
                <div>
                    <p id='concurso'>Concurso</p>
                    {
                        sortition &&
                        timemaniaDetails &&
                        <span id="sortitionDate">{`${timemaniaSortition} - ${treatedDate}`}</span>
                    }
                </div>
            </div>

            <div className="timemaniaSortNumbersContainer">

                <div className='sortNumber' id="timemaniaSortNumber1">{numeros && numeros[0]}</div>
                <div className='sortNumber' id="timemaniaSortNumber2">{numeros && numeros[1]}</div>
                <div className='sortNumber' id="timemaniaSortNumber3">{numeros && numeros[2]}</div>
                <div className='sortNumber' id="timemaniaSortNumber4">{numeros && numeros[3]}</div>
                <div className='sortNumber' id="timemaniaSortNumber5">{numeros && numeros[4]}</div>
                <div className='sortNumber' id="timemaniaSortNumber6">{numeros && numeros[5]}</div>
                <div className='sortNumber' id="timemaniaSortNumber7">{numeros && numeros[6]}</div>

                <p id='timemaniaInfo'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>
        </div>
    )
}

export default Timemania