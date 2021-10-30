import React from 'react'
import './EstiloFeed.css'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import { exibePost } from '../../Rotas/Coordenador'
import { useHistory } from 'react-router-dom'
import { criaPost } from '../../Requisições/Posts/RequisicoesPosts'
import useForms from '../../Hooks/useForms'
import CardPost from './CardPost'

const Feed = () => {

    usePaginaProtegida()

    const history = useHistory()

    const [form, manipulaInputs, limpa] = useForms({
        title: "",
        body: ""
    })

    const enviaFormPost = (event) => {
        event.preventDefault()
        criaPost(form, limpa)
    }

    return (
        <div className='feed-page'>
            <form className="novo-post" onSubmit={enviaFormPost}>
                <input
                    id='input-titulo-post'
                    name="title"
                    value={form.title}
                    onChange={manipulaInputs}
                    placeholder='título do post'
                    required
                />
                <input
                    id='input-corpo-post'
                    name="body"
                    value={form.body}
                    onChange={manipulaInputs}
                    placeholder='escreva aqui seu post'
                    required
                />
                <button type="submit">Postar</button>
            </form>
            <CardPost/>
            {/* <button onClick={() => exibePost(history)}>+</button> */}
        </div>
    )
}

export default Feed