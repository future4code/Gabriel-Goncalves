import React from 'react'
import './EstiloCardPost.css'
import useRequisicao from '../../Hooks/useRequisicao'
import { URL } from '../../Constantes/URL'
import { useHistory } from 'react-router-dom'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import { exibePost } from '../../Rotas/Coordenador'
import { computaVotoPost } from '../../Requisições/Posts/RequisicoesPosts'
import { deletaVotoPost } from '../../Requisições/Deletes/RequisicoesDelete'

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

    const deletaVotoDoPost = (postId) => {
        deletaVotoPost(postId)
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
                    <button 
                        id={postagem.userVote === 1 ? "post-com-interacao" : "post-sem-interacao"}
                        onClick={postagem.userVote === 1 ? () => deletaVotoDoPost(postagem.id) : () => votaPostPositivo(postagem.id)}
                        >L</button>
                    <p>{postagem.voteSum}</p>
                    <button
                        id={postagem.userVote === -1 ? "post-com-interacao" : "post-sem-interacao"} 
                        onClick={postagem.userVote === -1 ? () => deletaVotoDoPost(postagem.id) : () => votaPostNegativo(postagem.id)}
                        >D</button>
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