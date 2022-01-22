import { useState } from "react";

const useForms = (inicialState) => {
    const [form, setForm] = useState(inicialState)

    const manipulateInputs = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const clear = () => {
        setForm(inicialState)
    }

    return [form, manipulateInputs, clear]
}

export default useForms