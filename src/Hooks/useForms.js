import {useState} from 'react'

const useForms = (estadoInicial) => {
    const [form, setForm] = useState(estadoInicial)

    const manipulaInputs = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const limpa = () => {
        setForm(estadoInicial)
    }

    return [form, manipulaInputs, limpa]
}

export default useForms