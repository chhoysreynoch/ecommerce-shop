import { createContext, useState } from "react";

export const CartItemsContext = createContext({
    cartItems: [],
    setCartItems: () => { },
});

export const CartItemProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartItemsContext.Provider>
    )
}

