import React from 'react'
import { useParams } from 'react-router-dom'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'
import useRequisicao from '../../Hooks/useRequisicao'
import {URL} from '../../Constantes/URL'

const Post = () => {

    usePaginaProtegida()

    const params = useParams()

    const pegaPost = useRequisicao([], `${URL}/posts/${params.id}/comments`)
    console.log(params.id)
    console.log("Detalhe", pegaPost)

    const postDetalhado = pegaPost && pegaPost.map((post) => {
        return <div key={post.createdAt}>
                    <div>
                        {post.username}
                    </div>
                    <div>
                        {post.body}
                    </div>
                    <div>
                    <button>L</button> {post.voteSum} <button>D</button>
                    </div>
               </div>
    }) 
    return (
        <div>
            Post page
            {postDetalhado}
        </div>
    )
}

export default Post