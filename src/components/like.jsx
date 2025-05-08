import { useCart } from "../contexts/CartProvider";
import { useLike } from "../contexts/LikeProvider"; 

export function Like() {
    const {likeItem} = useLike()

    return (
        <>
            <h1>Like</h1>
            <ul>
                {likeItem.map((item)=>(
                    <LikeItem key={`like-${item.id}`} item={item}/>
                ))}
            </ul>
        </>
    )
}

function LikeItem({ item }) {
    const {likeItem, handleLike} = useLike()
    const {handleAddToCart} = useCart()
    return (
        <>
            <li className="item">
            <p onClick={() => handleLike(item)}>{likeItem.some(liked => liked.id === item.id) ? "❤️":"🤍"}</p>
                <img width={100} src={item.img} />
                <section>
                    <div>{item.name}</div>
                    <div>{item.price}원</div>
                </section>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </li>
        </>
    )
}