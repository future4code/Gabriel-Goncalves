import React from "react"
import {useState} from 'react'

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

    return (
        <div>
            <form>
                <input
                    type=''
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    required
                />
                
                <input
                    type=''
                    name='age'
                    value={form.age}
                    onChange={onChange}
                    required
                />

                <input
                    type=''
                    name='applicationText'
                    value={form.applicationText}
                    onChange={onChange}
                    required
                />

                <input
                    type=''
                    name='profession'
                    value={form.profession}
                    onChange={onChange}
                    required
                />

                <input
                    type=''
                    name='country'
                    value={form.country}
                    onChange={onChange}
                    required
                />
                {/* <button onClick={}>Fazer Cadastro</button> */}
            </form>
        </div>
    )
}

export default ApplicationFormPage