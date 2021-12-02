import React from 'react'
import { URL } from '../../Constantes/URL'
import './EstiloCardComentario.css'
import useRequisicao from '../../Hooks/useRequisicao'
import { computaVotoComentario } from '../../Requisições/Posts/RequisicoesPosts'
import { deletaVotoComentario } from '../../Requisições/Deletes/RequisicoesDelete'

const CardComentario = (props) => {

    const pegaComentario = useRequisicao([], `${URL}/posts/${props.postId}/comments`)

    const votaComentarioPositivo = (id) => {
        const body = {
            direction: 1
        }
        computaVotoComentario(body, id)
    }

    const votaComentarioNegativo = (id) => {
        const body = {
            direction: -1
        }
        computaVotoComentario(body, id)
    }

    const deletaVotoDoComentario = (commentId) => {
        deletaVotoComentario(commentId)
    }

    const comentario = pegaComentario && pegaComentario.map((comment) => {
        return <div className='card-comentario' key={comment.createdAt}>
                    <div className='card-user-comentario'>
                        {comment.username}
                    </div>
                    <div className='card-text-comentario'>
                        {comment.body}
                    </div>
                    <div className='card-interaction-comentario'>
                        <div className='card-buttons-comentario'>
                            <button
                                id={comment.userVote === 1 ? 'comment-com-interacao' : 'comment-sem-interacao'} 
                                onClick={comment.userVote === 1 ? () => deletaVotoDoComentario(comment.id) : () => votaComentarioPositivo(comment.id)}
                                >L</button>
                            {comment.voteSum}
                            <button
                                id={comment.userVote === -1 ? 'comment-com-interacao' : 'comment-sem-interacao'}
                                onClick={comment.userVote === -1 ? () => deletaVotoDoComentario(comment.id) : () => votaComentarioNegativo(comment.id)}
                                >D</button>
                        </div>
                    </div>
               </div>
    })

    return (
        <div>
            {comentario}
        </div>
    )
}

export default CardComentario