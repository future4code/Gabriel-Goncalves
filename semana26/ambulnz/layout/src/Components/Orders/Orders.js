import React from "react";
import "./Orders.css"

const Orders = (props) => {

    const cart = props.cart

    const showShopCart = () => {
        document.getElementById("shopCartPage").style.opacity = 1
        document.getElementById("shopCartPage").style.transform = "translate(-110px, 0)"
    }

    const ordersNumber = <div id="ordersCard">
        <h4>Orders<sup>{cart.length}</sup></h4>
        <button onClick={() => showShopCart()}>Check your orders</button>
    </div>

    return (
        <div id="ordersComponent">
            {cart.length !== 0 ? ordersNumber : null}
        </div>
    )
}

export default Orders