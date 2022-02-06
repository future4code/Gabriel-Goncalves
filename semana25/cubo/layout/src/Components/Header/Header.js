import React from "react";
import useForms from "../../Hooks/useForms";
import { createInvestor } from "../../REST/POST/postReqs";
import "./Header.css"

const Header = () => {

    const [form, manipulateInputs, clear] = useForms({
        fName: "",
        lName: "",
        participation: ""
    })

    const enviaForm = (event) => {
        // event.preventDefault()
        createInvestor(form, clear)
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