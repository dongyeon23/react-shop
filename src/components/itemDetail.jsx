export function ItemDetail() {
    return (
    <div className="product-detail-overlay">
        <div className="product-detail">
        <div className="product-image">
            <img src={product.img} alt={product.name} width={300} />
        </div>
        <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="price">
            <b>{product.price}원</b>
            </div>
            <button className="add-to-cart">Add to Cart</button>
            <button onClick={closeDetail}>Close</button>
        </div>
        </div>
    </div>
    );
}