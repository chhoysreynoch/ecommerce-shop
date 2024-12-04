import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [id]);

    const Loading = () => <div>Loading...</div>;

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ maxHeight: "400px" }}
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}{" "}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <Link to="/CartPage">
                        <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
                    </Link>
                    <Link to="/shop">
                        <button className="btn btn-dark ms-2 px-3 py-2">Go to shop</button>
                    </Link>
                </div>
            </>
        );
    };

    return (
        <div className="container py-5">
            <div className="row">
                {loading ? <Loading /> : product ? <ShowProduct /> : <p>Product not found.</p>}
            </div>
        </div>
    );
};

export default Product;
