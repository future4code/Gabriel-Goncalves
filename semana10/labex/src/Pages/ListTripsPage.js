import React from "react"
import {useHistory} from "react-router-dom"

function ListTripsPage () {

    const history = useHistory()

    const exibeInscricao = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            ListTripsPage
            <button onClick={exibeInscricao}>Inscrição</button>
        </div>
    )
}

export default ListTripsPage