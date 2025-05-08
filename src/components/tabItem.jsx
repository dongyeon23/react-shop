import { useCart } from "../contexts/CartProvider";
import { useCount } from "../contexts/CountProvider";
import { useLike } from "../contexts/LikeProvider";
import { Link } from 'react-router-dom';

export function TabItemList({filterdItems, handleCount}) {

    return (
        <>
            <ul>
            {filterdItems.map((item) => (<TabItem key={item.id} item={item} handleCount={handleCount}/>
            ))}
            </ul>
        </>
    )
}
function TabItem({item, handleCount}) {
    const {handleAddToCart}= useCart();
    const {handleLike, likeItem}= useLike();
    const {count}= useCount();
    
    return (
        <li className="item">
            <p onClick={() => handleLike(item)}>{likeItem.some(liked => liked.id === item.id) ? "❤️":"🤍"}</p>
                <Link to={`/item/${item.id}`}>
                    <img width={100} src={item.img} />
                    <section>
                        <div>{item.name}</div>
                        <div>{item.price}원</div>
                    </section>
                </Link>

            <button onClick={()=>handleAddToCart(item)}>Add to cart</button>
            <section>
                    <p>{count}</p>
                    <button>-</button>
                    <button onClick={()=>handleCount("plus")}>+</button>
            </section>
        </li>
    )
}