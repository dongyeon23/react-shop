import { useCart } from "../contexts/CartProvider";
import { useCount } from "../contexts/CountProvider";
import { useLike } from "../contexts/LikeProvider";

export function TabItemList({filterdItems, handleCount, setToggleLike}) {

    return (
        <>
            <ul>
            {filterdItems.map((item) => (<TabItem key={item.id} item={item} handleCount={handleCount} setToggleLike={setToggleLike}/>
            ))}
            </ul>
        </>
    )
}
function TabItem({item, handleCount, setToggleLike}) {
    const {cart, setCart}= useCart();
    const {count}= useCount();
    const {likeItem, setLikeItem} = useLike();

    const handleAddToCart = () => {
        const isExist = cart.some((prevCart) => prevCart.id === item.id)
        if(!isExist) {
            setCart((prevCart) => [...prevCart, item])
        }
    }
    const handleLike = (likedItem) => {
        const likeExist = likeItem.some((prevLikedItem)=>prevLikedItem.id === likedItem.id)
        if(!likeExist) {
        setLikeItem((prevLikedItem)=>[...prevLikedItem, likedItem])
        }
        console.log(item)
    }
    return (
        <li className="item">
        <p onClick={() => handleLike(item)}>
        {likeItem.some(liked => liked.id === item.id) ? "❤️":"🤍"}
</p>
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
    )
}