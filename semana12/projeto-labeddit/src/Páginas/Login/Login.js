import React from 'react'
import "./Login.css"
import useForms from '../../Hooks/useForms'
import { exibeCadastro } from '../../Rotas/Coordenador'
import { useHistory } from 'react-router-dom'
import { login } from '../../Requisições/Posts/RequisicoesPosts'
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
            <div className="login-page">
                <form className="login-form" onSubmit={enviaForm}>
                    <input
                        className='login-input'
                        name={"email"}
                        value={form.email}
                        onChange={manipulaInputs}
                        placeholder="e-mail"
                        type="email"
                        required
                    />

                    <input
                        className='login-input'
                        name={"password"}
                        value={form.password}
                        onChange={manipulaInputs}
                        placeholder="senha"
                        type='password'
                        required
                    />

                    <button type="submit">Login</button>
                </form>
                <button onClick={() => exibeCadastro(history)}>Cadastre-se</button>
            </div>
        </div>
    )
}

export default Login