import React from 'react'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import useRequisicao from '../../Hooks/useRequisicao'
import {URL} from "../../Constantes/URL"
import { exibePost } from '../../Rotas/Coordenador'
import { useHistory } from 'react-router-dom'
import { criaPost } from '../../Requisições/Posts/Posts'
import useForms from '../../Hooks/useForms'

const Feed = () => {

    usePaginaProtegida()

    const history = useHistory()

    const posts = useRequisicao([], `${URL}/posts`)

    const [form, manipulaInputs, limpa] = useForms({
        title: "",
        body: ""
    })

    const enviaFormPost = (event) => {
        event.preventDefault()
        criaPost(form, limpa)
    }

    const vaiParaDetalhes = (id) => {
        exibePost(history, id)
    }

    const postsRenderizaveis = posts && posts.map((postagem) => {
        return <div key={postagem.id} onClick={() => vaiParaDetalhes(postagem.id)}>
            <h4>{postagem.username}</h4>
            <h5>{postagem.title}</h5>
            <p>{postagem.body}</p>
            <hr/>
        </div>
    })

    return (
        <div>
            Feed page
            <form onSubmit={enviaFormPost}>
                <input
                    name="title"
                    value={form.title}
                    onChange={manipulaInputs}
                    placeholder='título do post'
                    required
                />
                <input
                    name="body"
                    value={form.body}
                    onChange={manipulaInputs}
                    placeholder='escreva aqui seu post'
                    required
                />
                <button type="submit">Postar</button>
            </form>
            {postsRenderizaveis}
            <button onClick={() => exibePost(history)}>+</button>
        </div>
    )
}

export default Feed