import React from 'react'
import { URL } from '../../Constantes/URL'
import useRequisicao from '../../Hooks/useRequisicao'
import { computaVotoComentario } from '../../Requisições/Posts/RequisicoesPosts'

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

    const comentario = pegaComentario && pegaComentario.map((post) => {
        return <div key={post.createdAt}>
                    <div>
                        {post.username}
                    </div>
                    <div>
                        {post.body}
                    </div>
                    <div>
                    <button onClick={() => votaComentarioPositivo(post.id)}>L</button> {post.voteSum} <button onClick={() => votaComentarioNegativo(post.id)}>D</button>
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