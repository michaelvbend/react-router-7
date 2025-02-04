import { Link, useNavigate } from "react-router-dom";
import './Products.css';

function Products() {
    const navigate = useNavigate();
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];
    return (
        <div className="container">
            <h1 className="header">All Products</h1>
            <ul className="productList">
                {products.map(product => (
                    <span key={product.id} className="productItem">
                        <li>
                            {product.name} - ${product.price}
                        </li>
                        <button
                            className="productButton"
                            onClick={() => navigate(`/products/${product.id}`)}
                        >
                            View details
                        </button>
                    </span>
                ))}
            </ul>
            <Link to={"/"}
                className="backButton"
            >
                Go back
            </Link>
        </div>
    );
}

export default Products;