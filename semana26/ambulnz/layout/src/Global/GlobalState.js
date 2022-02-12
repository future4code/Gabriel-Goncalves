import React, { useState } from 'react'

const GlobalState = (props) => {

    const [cart, setcart] = useState()

    const data = { cart, setcart }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState