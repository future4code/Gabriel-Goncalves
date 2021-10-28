import React from 'react'
import usePaginaProtegida from '../../Hooks/usePaginaProtegida'

const Feed = () => {

    usePaginaProtegida()

    return (
        <div>
            Feed page
        </div>
    )
}

export default Feed