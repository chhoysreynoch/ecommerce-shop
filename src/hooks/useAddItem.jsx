import useCart from "./useCart";

const useAddItem = () => {
    const { cartItems, setCartItems } = useCart();

    const addItem = (product) => {
        const currentCartItems = [...cartItems];

        const existingCartItem = currentCartItems.find(
            (item) => item.product.id === product.id
        );

        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            // If the product is not in the cart, add it
            currentCartItems.push({
                product,
                quantity: 1,
            });
        }

        setCartItems(currentCartItems);
    }
    return { addItem };
}

export default useAddItem;