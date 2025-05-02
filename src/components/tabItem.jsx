export function TabItemList({filterdItems, setCart}) {
    return (
        <>
            <ul>
            {filterdItems.map((item) => (<TabItem key={item.id} item={item} setCart={setCart} />
            ))}
            </ul>
        </>
    )
}
function TabItem({item, setCart}) {

    const handleAddToCart = () => {
        setCart((prevCart) => [...prevCart, item])
    }
    return (
        <li className="item">
            <img width={100} src={item.img} />
            <section>
                <div>{item.name}</div>
                <div>{item.price}원</div>
            </section>
            <button onClick={handleAddToCart}>Add to cart</button>
        </li>
    )
}