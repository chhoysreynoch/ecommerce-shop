import { useContext } from "react";
import { CartItemsContext } from "../context/CardItemProvider";

const useCart = () => {
    const { cartItems, setCartItems } = useContext(CartItemsContext);
    return { cartItems, setCartItems }
}

export default useCart;