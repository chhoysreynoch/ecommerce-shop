import React from "react";
import userCart from "../hooks/useCart";
import useAddItem from "../hooks/useAddItem";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {

    const { cartItems } = userCart();
    const { updateQuantity, removeItem } = useAddItem();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/CheckoutPage");
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const tax = subtotal * 0.1; // Example: 10% tax
        const shipping = 20; // Example: Flat $20 shipping fee
        return (subtotal + tax + shipping).toFixed(2);
    };

    return (
        <>
            {/* Start Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Cart</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            {cartItems.length === 0 ? (
                <div
                    style={{
                        textAlign: "center",
                        fontSize: "24px",
                        fontWeight: "bold",
                        margin: "50px 0",
                    }}
                >
                    Your cart is empty. Start adding products!
                </div>
            ) : (
                <div className="untree_co-section before-footer-section">
                    <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item.product.id}>
                                                    <td className="product-thumbnail">
                                                        <img
                                                            src={item.product.image}
                                                            alt={item.product.name}
                                                            className="img-fluid"
                                                        />
                                                    </td>
                                                    <td className="product-name">
                                                        <h2 className="h5 text-black">{item.product.title}</h2>
                                                    </td>
                                                    <td>${item.product.price.toFixed(2)}</td>
                                                    <td>
                                                        <div
                                                            className="input-group mb-3 d-flex align-items-center quantity-container"
                                                            style={{ maxWidth: 120 }}
                                                        >
                                                            <div className="input-group-prepend">
                                                                <button
                                                                    type="button" // Ensure the button type is "button" (not "submit")
                                                                    onClick={(event) => {
                                                                        event.preventDefault(); // Prevent form submission
                                                                        updateQuantity(item.product.id, item.quantity - 1);
                                                                    }}
                                                                    disabled={item.quantity <= 1}
                                                                    className="btn btn-sm btn-outline-secondary"
                                                                >
                                                                    −
                                                                </button>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control text-center quantity-amount"
                                                                value={item.quantity} // Dynamically link the value to the item's quantity
                                                                readOnly // Prevent direct editing for controlled behavior
                                                                aria-label="Quantity"
                                                                aria-describedby="button-addon1"
                                                            />
                                                            <div className="input-group-append">
                                                                <button
                                                                    type="button" // Ensure the button type is "button" (not "submit")
                                                                    onClick={(event) => {
                                                                        event.preventDefault(); // Prevent form submission
                                                                        updateQuantity(item.product.id, item.quantity + 1);
                                                                    }}
                                                                    className="btn btn-sm btn-outline-secondary"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>


                                                    <td>${(item.quantity * item.product.price).toFixed(2)}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => removeItem(item.product.id)}
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row mb-5">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <Link to="/" className="btn btn-black btn-sm btn-block">
                                            Update Cart
                                        </Link>
                                    </div>
                                    <div className="col-md-6">
                                        <Link to="/shop" className="btn btn-outline-black btn-sm btn-block">
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="text-black h4" htmlFor="coupon">
                                            Coupon
                                        </label>
                                        <p>Enter your coupon code if you have one.</p>
                                    </div>
                                    <div className="col-md-8 mb-3 mb-md-0">
                                        <input
                                            type="text"
                                            className="form-control py-3"
                                            id="coupon"
                                            placeholder="Coupon Code"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-black">Apply Coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pl-5">
                                <div className="row justify-content-end">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-12 text-right border-bottom mb-5">
                                                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <span className="text-black">Subtotal</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">${calculateSubtotal()}</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-md-6">
                                                <span className="text-black">Total</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">${calculateTotal()}</strong>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button
                                                    className="btn btn-black btn-lg py-3 btn-block"
                                                    onClick={handleCheckout}
                                                >
                                                    Proceed To Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>

    )
}
export default CartPage;