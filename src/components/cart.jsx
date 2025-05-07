import { useCart } from "../contexts/CartProvider";
import { useCount } from "../contexts/CountProvider";

export function Cart({ item }) {
    const {cart, setCart}= useCart();

    const removeCart = () => {
        setCart([])
    }
    const totalPrice = cart.reduce((total, itemPrice)=>{return total + itemPrice.price}, 0);

    return (
        <>
            <h1>Cart</h1>
            <p><b>Total</b> {totalPrice}</p>
            <button onClick={removeCart}>Remove All</button>
            <ul>
                {cart.map((item) => (
                    <CartItem key={item.id} addedItem={item} />
                ))}
            </ul>
        </>
    );
}
function CartItem({ addedItem }) {
    const {cart, setCart}= useCart();
    const {count}= useCount();

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
                <section>
                    <p>{count}</p>
                    <button>-</button>
                    <button>+</button>
                </section>
            </li>
        </>
    )
}