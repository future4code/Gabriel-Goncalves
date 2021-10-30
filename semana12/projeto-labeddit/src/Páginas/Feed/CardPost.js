import React from 'react'
import './EstiloCardPost.css'
import useRequisicao from '../../Hooks/useRequisicao'
import { URL } from '../../Constantes/URL'
import { useHistory } from 'react-router-dom'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import { exibePost } from '../../Rotas/Coordenador'
import { computaVotoPost } from '../../Requisições/Posts/RequisicoesPosts'

const CardPost = () => {

    usePaginaProtegida()

    const history = useHistory()

    const posts = useRequisicao([], `${URL}/posts`)

    const vaiParaDetalhes = (id) => {
        exibePost(history, id)
    }

    const votaPostPositivo = (postId) => {
        const body = {
            direction: 1
        }
        computaVotoPost(body, postId)
    }

    const votaPostNegativo = (postId) => {
        const body = {
            direction: -1
        }
        computaVotoPost(body, postId)
    }

    const postsRenderizaveis = posts && posts.map((postagem) => {
        return <div className='card' key={postagem.id}>
            <div className='card-user'>
                <h4>{postagem.username}</h4>
            </div>
            <div className='card-text'>
                <p>{postagem.body}</p>
            </div>
            <div className='card-interaction'>
                <div className='card-buttons'>
                    <button onClick={() => votaPostPositivo(postagem.id)}>L</button>
                    <p>{postagem.voteSum}</p>
                    <button onClick={() => votaPostNegativo(postagem.id)}>D</button>
                </div>
                <button id='botao-detalhes' onClick={() => vaiParaDetalhes(postagem.id)}>{postagem.commentCount} Comentários</button>
            </div>
        </div>
    })

    return (
        <div>
            {postsRenderizaveis}
        </div>
    )
}

export default CardPost