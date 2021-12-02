import React from 'react'
import './EstiloCardPostDetalhado.css'
import { URL } from '../../Constantes/URL'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import useRequisicao from '../../Hooks/useRequisicao'
import { computaVotoPost } from '../../Requisições/Posts/RequisicoesPosts'
import { deletaVotoPost } from '../../Requisições/Deletes/RequisicoesDelete'

const CardPostDetalhado = (props) => {

    usePaginaProtegida()

    const votaPostPositivo = () => {
        const body = {
            direction: 1
        }
        computaVotoPost(body, props.postId)
    }

    const votaPostNegativo = () => {
        const body = {
            direction: -1
        }
        computaVotoPost(body, props.postId)
    }

    const deletaVotoDoPost = (postId) => {
        deletaVotoPost(postId)
    }

    const posts = useRequisicao([], `${URL}/posts`)

    const postsRenderizaveis = posts && posts.map((postagem) => {
        if(postagem.id === props.postId) {
            return <div className='card-detalhado' key={postagem.id}>
                <div className='card-user-detalhado'>
                    <h4>{postagem.username}</h4>
                    <h5>{postagem.title}</h5>
                </div>
                <div className='card-text-detalhado'>
                    <p>{postagem.body}</p>
                </div>
                <div className='card-interaction-detalhado'>
                    <div className='card-buttons-detalhado'>
                        <button
                            id={postagem.userVote === 1 ? "detalhado-com-interacao" : "detalhado-sem-interacao"}
                            onClick={postagem.userVote === 1 ? () => deletaVotoDoPost(postagem.id) : () => votaPostPositivo(postagem.id)}
                        >L</button>
                        <p>{postagem.voteSum}</p>
                        <button
                            id={postagem.userVote === -1 ? "detalhado-com-interacao" : "detalhado-sem-interacao"}
                            onClick={postagem.userVote === -1 ? () => deletaVotoDoPost(postagem.id) : () => votaPostNegativo(postagem.id)}
                        >D</button>
                    </div>
                    <p id='comentarios'>{postagem.commentCount}</p>
                </div>
        </div>
        }
    })

    return (
        <div>
            {postsRenderizaveis}
        </div>
    )
}

export default CardPostDetalhado