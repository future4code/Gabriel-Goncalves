import React from 'react'
import useForms from '../../Hooks/useForms'
import { exibeCadastro } from '../../Rotas/Coordenador'
import { useHistory } from 'react-router-dom'
import { login } from '../../Requisições/Posts/Posts'
import usePaginaDesprotegida from '../../Hooks/usePaginaDesprotegida'

const Login = () => {

    usePaginaDesprotegida()

    const history = useHistory()

    const [form, manipulaInputs, limpa] = useForms({
        email: "", 
        password: ""
    })

    const enviaForm = (event) => {
        event.preventDefault()
        login(form, history, limpa)
    }

    return (
        <div>
            <div>
                <form onSubmit={enviaForm}>
                    <input
                        name={"email"}
                        value={form.email}
                        onChange={manipulaInputs}
                        placeholder="e-mail"
                        type="email"
                        required
                    />

                    <input
                        name={"password"}
                        value={form.password}
                        onChange={manipulaInputs}
                        placeholder="senha"
                        type='password'
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>

            <button onClick={() => exibeCadastro(history)}>Cadastre-se</button>

        </div>
    )
}

export default Login