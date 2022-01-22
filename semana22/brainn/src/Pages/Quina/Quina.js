import React, { useContext, useEffect, useState } from "react";
import Select from "../../Components/Select/Select";
import GlobalStateContext from "../../Global/GlobalStateContext";
import axios from "axios";
import { URL } from "../../BASE_URL/BASE_URL";
import { setDateToDDMMYYY } from "../../Services/DateTreatment";
import "./Quina.css"

const Quina = () => {

    const { getLoteries, ids, getSortitions, sortition } = useContext(GlobalStateContext)
    const [quinaDetails, setQuinaDetails] = useState()

    useEffect(() => {
        getLoteries()
        getSortitions()
    }, [])

    const quinaIndex = ids && ids.findIndex((item) => {
        return item.nome === 'quina'
    })

    const sortitionIndex = sortition && sortition.findIndex((item) => {
        return item.loteriaId === quinaIndex
    })

    const quinaSortition = sortition && sortition[sortitionIndex] && sortition[sortitionIndex].concursoId

    useEffect(() => {
        quinaSortition && getSortitionDetail(quinaSortition)
    }, [quinaSortition])

    const getSortitionDetail = (sortitionId) => {
        axios.get(`${URL}/concursos/${sortitionId}`)
            .then((response) => {
                setQuinaDetails(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const numeros = quinaDetails && quinaDetails.numeros

    const date = quinaDetails && quinaDetails.data
    const treatedDate = quinaDetails && setDateToDDMMYYY(date)

    return (
        <div id='quinaPage'>
            <div id='quinaSideContent'>
                <Select />
                <p id='logo'>QUINA</p>
                <div>
                    <p id='concurso'>Concurso</p>
                    {
                        sortition &&
                        quinaDetails &&
                        <span id="sortitionDate">{`${quinaSortition} - ${treatedDate}`}</span>
                    }
                </div>
            </div>

            <div className="quinaSortNumbersContainer">

                <div className='sortNumber' id="quinaSortNumber1">{numeros && numeros[0]}</div>
                <div className='sortNumber' id="quinaSortNumber2">{numeros && numeros[1]}</div>
                <div className='sortNumber' id="quinaSortNumber3">{numeros && numeros[2]}</div>
                <div className='sortNumber' id="quinaSortNumber4">{numeros && numeros[3]}</div>
                <div className='sortNumber' id="quinaSortNumber5">{numeros && numeros[4]}</div>

                <p id='quinaInfo'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>
        </div>
    )
}

export default Quina