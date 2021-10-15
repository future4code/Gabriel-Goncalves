import React from "react"
import {useEffect} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"

function TripDetailsPage () {

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === null) {
            console.log("cadê o token?")
            history.push('/login')
        }
    }, [])

    useEffect(() => {
        pegaDetalhes()
    }, [])

    const pegaDetalhes = () => {
        const token = localStorage.getItem("token")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncavles-maryam/trip/Ew06mEABzqDMNaliByLk"
        const headers = {
            headers: {
                auth: token
            }
        }
        axios.get(url, headers)
        .then((response) => {
            console.log(response.data.trip)
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    return (
        <div>
            TripDetailsPage
        </div>
    )
}

export default TripDetailsPage