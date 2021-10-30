import React from 'react'
import { useHistory } from 'react-router'
import useForms from '../../Hooks/useForms'
import usePaginaDesprotegida from '../../Hooks/usePaginaDesprotegida'
import { cadastrar } from '../../Requisições/Posts/RequisicoesPosts'

const Cadastro = () => {

    usePaginaDesprotegida()

    const history = useHistory()

    const [form, manipulaInputs, limpa] = useForms({
        username: "",
        email: "",
        password: ""
    })

    const enviaFormCadastro = (event) => {
        event.preventDefault()
        cadastrar(form, history, limpa)
    }

    return (
        <div>
            <form onSubmit={enviaFormCadastro}>
                <input
                    name={"username"}
                    value={form.username}
                    onChange={manipulaInputs}
                    placeholder="usuário"
                    required
                />

                <input
                    name={"email"}
                    value={form.email}
                    onChange={manipulaInputs}
                    placeholder="e-mail"
                    type='email'
                    required
                />

                <input
                    name={"password"}
                    value={form.password}
                    onChange={manipulaInputs}
                    placeholder="senha"
                    type="password"
                    required
                />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro