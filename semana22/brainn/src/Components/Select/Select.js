import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import "./Select.css"
const Select = () => {

    const history = useHistory()
    
    const { loto, setLoto, changeLoto } = useContext(GlobalStateContext)

    const changeValue = (e) => {
        setLoto(e.target.value)
    }

    useEffect(() => {
        changeLoto(history)
    }, [loto])

    return (
        <div>
            <select id='select' value={loto} onChange={changeValue}>
                <option value="megasena">Mega-Sena</option>
                <option value="diadesorte">Dia de Sorte</option>
                <option value="lotofacil">Lotofacil</option>
                <option value="lotomania">Lotomania</option>
                <option value="quina">Quina</option>
                <option value="timemania">Timemania</option>
            </select>
        </div>
    )
}

export default Select