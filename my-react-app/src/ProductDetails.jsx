import { Link, Outlet, useParams } from "react-router-dom";
import './ProductDetails.css';

function ProductDetails() {
    const { productId } = useParams();
    return (
        <div className="container">
            <h1 className="header">Product Details</h1>
            <p className="productId">Product ID: {productId}</p>
            <div className="links">
                <Link to="" className="link">View product info</Link>
                <Link to="reviews" className="link">View reviews</Link>
            </div>
            <Outlet />
            <Link to="/products" className="backLink">Back to products</Link>
        </div>
    );
}

export default ProductDetails;