import React from 'react'
import { useParams } from 'react-router-dom'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import {criaComentario} from '../../Requisições/Posts/RequisicoesPosts'
import useForms from '../../Hooks/useForms'
import CardPostDetalhado from './CardPostDetalhado'
import CardComentario from './CardComentario'

const Post = () => {

    usePaginaProtegida()

    const params = useParams()

    const [form, manipulaInputs, limpa] = useForms({
        body: ""
    })

    const enviaForm = (event) => {
        event.preventDefault()
        criaComentario(form, params.id)
    }

    return (
        <div>
            <form onSubmit={enviaForm}>
                <input
                    name="body"
                    value={form.body}
                    onChange={manipulaInputs}
                    placeholder="escreva seu comentário"
                    required
                />
                <button type="submit">Enviar comentário</button>
            </form>
            <hr/>
            <CardPostDetalhado
                postId={params.id}
            />
            <hr/>
            <hr/>
            <CardComentario
                postId={params.id}
            />
        </div>
    )
}

export default Post