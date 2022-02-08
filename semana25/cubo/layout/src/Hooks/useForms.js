import {useState} from 'react'

const useForms = (initialState) => {
    const [form, setForm] = useState(initialState)

    const manipulateInputs = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, manipulateInputs, clear]
}

export default useForms