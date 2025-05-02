export function Cart({ cart }) {
    return (
        <>
            <h1>Cart</h1>
            <ul>
                {cart.map((item) => (
                    <CartItem key={item.id} addedItem={item} />
                ))}
            </ul>
        </>
    );
}
function CartItem({ addedItem }) {
    return (
        <>
            <li className="item">
                <img width={100} src={addedItem.img} />
                <section>
                    <div>{addedItem.name}</div>
                    <div>{addedItem.price}원</div>
                </section>
            </li>
        </>
    )
}