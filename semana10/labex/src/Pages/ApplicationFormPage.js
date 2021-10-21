import axios from "axios"
import React from "react"
import {useState} from 'react'
import {useParams} from 'react-router-dom'

function ApplicationFormPage () {

    const [form, setForm] = useState({
        name: "", 
        age: 0, 
        applicationText: "", 
        profession: "", 
        country: ""
    })

    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const params = useParams()

    const enviaFormulario = (event) => {
        event.preventDefault()

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncalves-maryam/trips/${params.id}/apply`
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(url, body)
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <form onSubmit={enviaFormulario}>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    required
                />
                
                <input
                    type='number'
                    name='age'
                    value={form.age}
                    onChange={onChange}
                    required
                />

                <input
                    type='text'
                    name='applicationText'
                    value={form.applicationText}
                    onChange={onChange}
                    required
                />

                <input
                    type='text'
                    name='profession'
                    value={form.profession}
                    onChange={onChange}
                    required
                />

                <input
                    type='text'
                    name='country'
                    value={form.country}
                    onChange={onChange}
                    required
                />

                <button type='submit'>Fazer Cadastro</button>
            </form>
        </div>
    )
}

export default ApplicationFormPage