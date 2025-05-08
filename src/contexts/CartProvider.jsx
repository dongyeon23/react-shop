import { createContext, useContext, useState } from "react";

const CartContext = createContext();



export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);
    const handleAddToCart = (item) => {
        const isExist = cart.some((prevCart) => prevCart.id === item.id)
        if(!isExist) {
            setCart((prevCart) => [...prevCart, item])
        }
    }
    return (
        <CartContext.Provider value={{ cart, setCart, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}