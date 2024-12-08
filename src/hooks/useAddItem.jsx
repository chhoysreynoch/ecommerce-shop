// import useCart from "./useCart";

// const useAddItem = () => {
//     const { cartItems, setCartItems } = useCart();

//     const addItem = (product) => {
//         const currentCartItems = [...cartItems];

//         const existingCartItem = currentCartItems.find(
//             (item) => item.product.id === product.id
//         );

//         if (existingCartItem) {
//             existingCartItem.quantity += 1;
//         } else {
//             // If the product is not in the cart, add it
//             currentCartItems.push({
//                 product,
//                 quantity: 1,
//             });
//         }

//         setCartItems(currentCartItems);
//     }
//     return { addItem };
// }

// export default useAddItem;



import useCart from "./useCart";

const useAddItem = () => {
    const { cartItems, setCartItems } = useCart();

    const addItem = (product) => {
        const currentCartItems = [...cartItems];
        const existingCartItem = currentCartItems.find(
            (item) => item.product.id === product.id
        );

        if (existingCartItem) {
            // Increase quantity if the product is already in the cart
            existingCartItem.quantity += 1;
            existingCartItem.total = existingCartItem.quantity * product.price;
        } else {
            // Add new product to the cart
            currentCartItems.push({
                product: {
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                },
                quantity: 1,
                total: product.price,
            });
        }

        setCartItems(currentCartItems);
    };

    const updateQuantity = (productId, newQuantity) => {
        const currentCartItems = [...cartItems];
        const cartItem = currentCartItems.find(
            (item) => item.product.id === productId
        );

        if (cartItem) {
            cartItem.quantity = newQuantity;
            cartItem.total = cartItem.quantity * cartItem.product.price;
        }

        setCartItems(currentCartItems);
    };

    const removeItem = (productId) => {
        const updatedCartItems = cartItems.filter(
            (item) => item.product.id !== productId
        );
        setCartItems(updatedCartItems);
    };

    return { addItem, updateQuantity, removeItem };
};

export default useAddItem;
