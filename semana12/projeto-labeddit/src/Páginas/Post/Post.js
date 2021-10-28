import React from 'react'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'

const Post = () => {

    usePaginaProtegida()

    return (
        <div>
            Post page
        </div>
    )
}

export default Post