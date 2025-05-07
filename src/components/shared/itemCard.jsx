export function ItemCard () {
    return (
        <>
            <li className="item">
                <p onClick={() => handleLike(item)}></p>
                <img width={100} src={item.img} />
                <section>
                    <div>{item.name}</div>
                    <div>{item.price}원</div>
                </section>
                <button onClick={handleAddToCart}>Add to cart</button>
                <section>
                    <p>{count}</p>
                    <button>-</button>
                    <button onClick={()=>handleCount("plus")}>+</button>
                </section>
            </li>
        </>
    )
}