import React from 'react'
import './EstiloPost.css'
import { useParams, useHistory } from 'react-router-dom'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import {criaComentario} from '../../Requisições/Posts/RequisicoesPosts'
import useForms from '../../Hooks/useForms'
import CardPostDetalhado from './CardPostDetalhado'
import CardComentario from './CardComentario'

const Post = () => {

    usePaginaProtegida()

    const params = useParams()

    const history = useHistory()

    const [form, manipulaInputs] = useForms({
        body: ""
    })

    const enviaForm = (event) => {
        event.preventDefault()
        criaComentario(form, params.id)
    }

    const voltaFeed = () => {
        history.push('/feed')
    }

    return (
        <div className='post-page'>
            <CardPostDetalhado
                postId={params.id}
            />
            <form className='comment-form' onSubmit={enviaForm}>
                <input
                    id='input-comentario'
                    name="body"
                    value={form.body}
                    onChange={manipulaInputs}
                    placeholder="escreva seu comentário"
                    required
                />
                <button type="submit">Enviar comentário</button>
            </form>
            <button 
                id='botao-voltar'
                onClick={() => voltaFeed()}>Feed</button>
            <CardComentario
                postId={params.id}
            />
        </div>
    )
}

export default Post