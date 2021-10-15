import React from "react"
import {useEffect} from "react"
import {useHistory} from "react-router-dom"

function CreateTripPage () {

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === null) {
            console.log("cadê o token?")
            history.push('/login')
        }
    }, [])

    return (
        <div>
            CreateTripPage
        </div>
    )
}

export default CreateTripPage