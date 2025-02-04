import './Products.css';

function Products() {
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
                        >
                            View details
                        </button>
                    </span>
                ))}
            </ul>
        </div>
    );
}

export default Products;