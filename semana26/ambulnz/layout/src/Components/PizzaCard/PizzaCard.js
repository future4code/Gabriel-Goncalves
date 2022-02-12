import React from "react";
import "./PizzaCard.css"

const PizzaCard = (props) => {

    const cart = props.cart
    const pizzas = props.pizzas

    const addToCart = (pizza) => {
        const position = cart.findIndex((item) => {
            return pizza.name === item.name
        })

        let newCart = [...cart]

        if (position === -1) {
            newCart.push({ ...pizza, quantity: 1 })

        } else {
            newCart[position].quantity += 1

        }

        props.setCart(newCart)
        showDetails()
    }

    const pizzasList = pizzas && pizzas.map((pizza) => {
        return <div className="pizzaCard" key={pizza.name}>
            <h4 id="cardTitle">{pizza.name}</h4>
            <p id="cardDescription">{pizza.ingredients.join(", ")}</p>
            <span id="cardPrice">R${pizza.price.toFixed(2)}</span>
            <button id="cardButton" onClick={() => addToCart(pizza)}>Add to cart</button>
        </div>
    })

    const showDetails = () => {
        document.getElementById("detailPage").style.opacity = 1
        document.getElementById("detailPage").style.transform = "translate(0, -50px)"
    }

    return(
        <div>
            {pizzasList}
        </div>
    )
}

export default PizzaCard