import './ProductDetails.css';

function ProductDetails() {
    const { productId } = 1;
    return (
        <div className="container">
            <h1 className="header">Product Details</h1>
            <p className="productId">Product ID: {productId}</p>
            <div className="links">
                <a>View product info</a>
                <a>View reviews</a>
            </div>

        </div>
    );
}

export default ProductDetails;