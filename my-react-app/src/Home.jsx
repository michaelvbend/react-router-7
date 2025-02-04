import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div className="container">
            <h1 className="header">Welcome to my React app!</h1>
            <h3 className="subHeader">Sections</h3>
            <ul className="sectionList">
                <li className="sectionItem"><Link to="/products" className="sectionLink">Products</Link></li>
                <li className="sectionItem"><Link to="/about" className="sectionLink">About</Link></li>
                <li className="sectionItem"><Link to="/contact" className="sectionLink">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Home;