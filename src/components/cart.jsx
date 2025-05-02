import { useState } from "react";

export function Cart({ cart, setCart, item }) {
    return (
        <>
            <h1>Cart</h1>
            <ul>
                {cart.map((item) => (
                    <CartItem key={item.id} addedItem={item} setCart={setCart} cart={cart}/>
                ))}
            </ul>
        </>
    );
}
function CartItem({ addedItem, setCart, cart }) {
    //delete
    const handleDeleteFunc = () => {
        setCart(cart.filter((prevCart)=>prevCart.id !== addedItem.id))
    }

    return (
        <>
            <li className="item">
                <img width={100} src={addedItem.img} />
                <section>
                    <div>{addedItem.name}</div>
                    <div>{addedItem.price}원</div>
                </section>
                <button onClick={handleDeleteFunc}>delete</button>
            </li>
        </>
    )
}