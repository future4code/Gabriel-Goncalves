import React, { useContext } from "react";
import useForms from "../../Hooks/useForms";
import { createInvestor } from "../../REST/POST/postReqs";
import GlobalStateContext from "../../Global/GlobalStateContext";
import "./Header.css"
// #04bbe2

const Header = () => {

    const [form, manipulateInputs, clear] = useForms({
        fName: "",
        lName: "",
        participation: ""
    })

    const { render, setRender } = useContext(GlobalStateContext)

    const enviaForm = (event) => {
        event.preventDefault()
        // createInvestor(form, clear)
        callSetRender()
    }

    const callSetRender = () => {
        setRender(!render)
    }

    return (
        <div className="headerContainer">
            <form onSubmit={enviaForm}>
                <input
                    className="headerInput"
                    name="fName"
                    value={form.fName}
                    onChange={manipulateInputs}
                    placeholder="First Name"
                />
                <input
                    className="headerInput"
                    name="lName"
                    value={form.lName}
                    onChange={manipulateInputs}
                    placeholder="Last Name"
                />
                <input
                    className="headerInput"
                    name="participation"
                    value={form.participation}
                    onChange={manipulateInputs}
                    placeholder="Participation"
                />
                <button className="headerButton" type="submit">SEND</button>
            </form>
        </div>
    )
}

export default Header