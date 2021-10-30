import React from 'react'
import './CardPostDetalhado.css'
import { URL } from '../../Constantes/URL'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import useRequisicao from '../../Hooks/useRequisicao'
import { computaVotoPost } from '../../Requisições/Posts/RequisicoesPosts'

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

    const posts = useRequisicao([], `${URL}/posts`)

    const postsRenderizaveis = posts && posts.map((postagem) => {
        if(postagem.id === props.postId) {
            return <div className='card' key={postagem.id}>
                <div className='card-user'>
                    <h4>{postagem.username}</h4>
                    <h5>{postagem.title}</h5>
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