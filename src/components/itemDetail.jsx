import { items } from "../assets/data";
import { useParams } from 'react-router-dom';
import { useCart } from "../contexts/CartProvider";
import { useLike } from "../contexts/LikeProvider";


export function ItemDetail() {
    const {handleAddToCart}= useCart();
    const {handleLike, likeItem}= useLike();
    const { id } = useParams()
    const itemObj = items.find((item)=>item.id === Number(id))

    return (
    <div className="item-detail">
        <div className="product-img">
            <img src={itemObj.img} alt={itemObj.name} width={300} />
        </div>
        <div className="product-info">
            <h2>{itemObj.name}</h2>
            <div className="price">
                <b>{itemObj.price}원</b>
            </div>
            <div>
                <p onClick={() => handleLike(itemObj)}>{likeItem.some(liked => liked.id === itemObj.id) ? "❤️":"🤍"}</p>
                <button onClick={() => handleAddToCart(itemObj)}>Add to Cart</button>
            </div>
            <p>{itemObj.description}</p>
        </div>
    </div>
    );
}